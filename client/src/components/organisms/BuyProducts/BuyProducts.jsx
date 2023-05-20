import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { getAllProducts } from "@/api/food/food";
import ProductCard from "@/components/molecules/productCard/ProductCard";
import 'swiper/swiper-bundle.min.css';

const BuyProducts = () => {
    const [ethnicProduct, setEthnicProduct] = useState([]);
    useEffect(() => {
        getAllProducts().then((res) => {
            setEthnicProduct(res.data);
        }
        );
    },[])
  return (
    <div>
      <div className="mx-20 my-12 product-swiper">
        <div className="flex justify-between mb-6">
          <h1 className="card-title">Ethnic Foods</h1>
          <button className="card-button" onClick={() => router.push("/shop")}>
            SEE ALL
          </button>
        </div>

        <Swiper slidesPerView={5} spaceBetween={200}>
          {ethnicProduct.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BuyProducts;
