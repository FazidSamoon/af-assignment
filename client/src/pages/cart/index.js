import Layout from '@/components/molecules/Layout'


// import PageTitle from '@/components/PageTitle';
import React, { useEffect, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { Checkout, Delete } from '@/utils/iconData';
import { getProductById } from '@/api/food/food';
import PageTitle from '@/components/molecules/PageTitle';
import StripeCheckout from 'react-stripe-checkout';

const index = () => {
    const [cartData, setCartData] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [productId, setproductId] = useState([]);
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const [stripeToken, setStripeToken] = useState(null);
    console.log(cartData)
  const onToken = (token) => {
    setStripeToken(token);
    if (token) {
      doPay();
    }
  };

  const doPay = async () => {
    checkoutHandle();
    if (!stripeToken) return console.log("Stripe token not generated")
    
    else {
      const response = await axios.post("http://localhost:3000/api/v1/payment", {
        headers: {
          Authorization: `Bearer ${stripeToken?.id}`,
        },
        tokenId: stripeToken?.id,
        amount: 500,
      });
      
      push("/");
    }
    
    // handleSubmit();
  };
    useEffect(() => {
        setCartData(JSON.parse(localStorage.getItem('cart_data')));
    }, []);

    useEffect(() => {
        let total = 0;
        let productIdArr = [];

        if (cartData) {
            cartData.forEach((product) => {
                total += product.price * product.quantity;
                productIdArr.push(product._id);
            });
        }

        setTotalAmount(total);
        setproductId(productIdArr);
    }, [cartData]);

    useEffect(() => {
        const getProductImagesAsync = async () => {
            const images = [];
            setIsLoading(true);
            for (let i = 0; i < productId.length; i++) {
                const image = await getProductImages(productId[i]);
                images.push(image);
            }
            setImages(images.flat());
            setIsLoading(false);
        };
        getProductImagesAsync();
    }, [productId]);

    const getProductImages = async (productId) => {
        const response = await getProductById(productId);
        if (response) return response.data.image;
        else toast.error('connection error try again');
    };

    const updateQuantity = (id, newQty) => {
        console.log(id, newQty)
        const updatedCartData = cartData.map((product) => {
            if (product._id === id) {
                return { ...product, quantity: newQty };
            } else {
                return product;
            }
        });
        localStorage.setItem('cart_data', JSON.stringify(updatedCartData));
        setCartData(updatedCartData);
    };

    const removeProduct = (id) => {
        const updatedCartData = cartData.filter((product) => product._id !== id);
        localStorage.setItem('cart_data', JSON.stringify(updatedCartData));
        setCartData(updatedCartData);
    };

    const checkoutHandle = () => {
        const shippingData = JSON.parse(localStorage.getItem('shipping_data'));
        if (cartData === null || cartData.length === 0) {
            toast.warning('Oops, it looks like your cart is empty.');
        } else if (shippingData === null) {
            router.push('/shipping');
        }
    };

    return (
        <Layout title="Cart Page">
            <PageTitle title="SHOPPING CART" image="/cart-title.jpg" />

            <div className="grid grid-cols-5 gap-10 mx-20 text-zinc-900 ">
                {/* CART PRODUCT */}
                <div className="col-span-4 mt-10">
                    <div className="card  bg-white">
                        <DataTable value={cartData} stripedRows tableStyle={{ minWidth: '50rem' }}>
                            <Column
                                field="product"
                                header="Product"
                                body={(rowData, rowIndex) => (
                                    <div className="flex items-center ">
                                        <Link href={{ pathname: '/product', query: { id: rowData._id } }}>
                                            {isLoading && <h1>Loading...</h1>}
                                            <img src={`${images[rowIndex.rowIndex]}`} alt="" className="w-16 h-16 rounded-lg" />
                                        </Link>
                                    </div>
                                )}
                                className=''
                            ></Column>
                            <Column field="name" header="Name"></Column>
                            <Column field="price" header="Price"></Column>
                            <Column
                                field="quantity"
                                header="Quantity"
                                body={(rowData) => (
                                    <div className="flex h-10">
                                        <button onClick={() => updateQuantity(rowData._id, rowData.quantity - 1 < 1 ? 1 : rowData.quantity - 1)} className="cursor-pointer text-2xl bg-white rounded-lg px-2 mx-2">
                                            -
                                        </button>
                                        <input
                                            type="number"
                                            value={rowData.quantity}
                                            onChange={(e) => updateQuantity(rowData._id, parseInt(e.target.value < 1 ? 1 : e.target.value > rowData.inStock ? rowData.inStock : e.target.value))}
                                            className="text-center w-12 pl-4 rounded-lg"
                                        />
                                        <button onClick={() => updateQuantity(rowData._id, rowData.quantity + 1)} className="cursor-pointer text-2xl bg-white rounded-lg px-2 mx-2">
                                            +
                                        </button>
                                    </div>
                                )}
                            ></Column>
                            <Column
                                header="Actions"
                                body={(rowIndex) => (
                                    <button className="cursor-pointer flex gap-1 rounded-lg bg-red-600 text-white p-2" onClick={() => removeProduct(rowIndex._id)}>
                                        <Delete />
                                        Remove
                                    </button>
                                )}
                            ></Column>
                        </DataTable>
                    </div>
                </div>

                {/* CHECK OUT */}
                <div className="col-span-1 mt-10 ">
                    <div className="text-white p-4 rounded-lg bg-secondary-color">
                        <div className="font-medium">Summary</div>
                        <div className="border-b-2 border-zinc-900 my-2"></div>
                        <div className="flex justify-between">
                            <h1>Subtotal :</h1>
                            <h1>Rs: {totalAmount.toFixed(2)}</h1>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1>Discount :</h1>
                            <h1>Rs: 0.00</h1>
                        </div>
                        <div className="flex justify-between mt-2">
                            <h1>Shipping :</h1>
                            <h1>Rs: 0.00</h1>
                        </div>
                        <div className="border-b-2 border-zinc-900 mb-2 mt-10"></div>
                        <div className="flex justify-between">
                            <h1>Total :</h1>
                            <h1>Rs: {totalAmount.toFixed(2)}</h1>
                        </div>
                    </div>
                    <StripeCheckout
                name="CHARITY LIFE"
                image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/858958/shopping-cart-clipart-md.png"
                billingAddress
                shippingAddress
                description={`Donate and make someonce life better`}
                amount={Number(totalAmount.toFixed(2))}
                token={onToken}
                stripeKey={
                  "pk_test_51LSNp7IFgBGrRGBPLrWtRg83OflcYL1h8uktQki0Tdfg9OnnyRf8f0M51usgQgolTSvtPDAgsPdCsmz2q9EsZCT200ko6ijbjS"
                }
              >
                    <button className="bg-primary-color  text-white flex gap-2 justify-center rounded-lg w-full px-2 py-2 font-medium mt-4" >
                        <Checkout />
                        CHECK OUT
                    </button></StripeCheckout>
                </div>
            </div>
        </Layout>
    );
}

export default index