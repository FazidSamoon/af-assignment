import Image from "next/image";
import { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import { useRouter } from "next/navigation";
import { login } from "@/api/auth/auth";
import { useFormik } from "formik";
import { makeDonation } from "@/api/food/food";
import axios from "axios";

const index = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const [totalAmount, setTotal] = useState(0);
  const onToken = (token) => {
    setStripeToken(token);
    if (token) {
      doPay();
    }
  };
  const { push } = useRouter();
  const initialValues = {
    amount: "",
    email: "",
    name: "",
  };
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        email: values.email,
        amount: values.amount,
        name: values.name,
      };

      console.log(data)
      makeDonation(data).then((response) => {
        if (!response.success) alert(response.message);
        else {
          doPay();
            // push("/test");
        }
    })},
    validateOnChange: false,
  });
  const { values, errors, handleChange, handleSubmit } = formik;

  const doPay = async () => {
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
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-8 h-8 mr-2"
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <span className="font-bold text-xl text-secondary-color">
            <span className="text-primary-color">CHARITY</span> LIFE
          </span>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              DONATE
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NAME
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={values.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  value={values.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="amount"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  AMOUNT
                </label>
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  placeholder="amount"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={values.amount}
                  onChange={handleChange}
                />
              </div>
              <StripeCheckout
                name="CHARITY LIFE"
                image="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/858958/shopping-cart-clipart-md.png"
                billingAddress
                shippingAddress
                description={`Donate and make someonce life better`}
                amount={Number(values.amount)}
                token={onToken}
                stripeKey={
                  "pk_test_51LSNp7IFgBGrRGBPLrWtRg83OflcYL1h8uktQki0Tdfg9OnnyRf8f0M51usgQgolTSvtPDAgsPdCsmz2q9EsZCT200ko6ijbjS"
                }
              >
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  DONATE
                </button>
              </StripeCheckout>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
