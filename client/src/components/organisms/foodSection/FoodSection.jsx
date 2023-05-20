import Donate from "@/components/molecules/Donations/Donate";
import FoodMainHeading from "@/components/molecules/FoodSection/FoodMainHeading";
import EduAid from "@/components/molecules/eduAid/EduAid";
import EduBlogs from "@/components/molecules/eduBlogs/EduBlogs";
import EduEvents from "@/components/molecules/eduEvents/EduEvents";
import FoodBlog from "@/components/molecules/foodBlogs/foodBlogs";
import React from "react";
import BuyProducts from "../BuyProducts/BuyProducts";

const FoodSection = () => {

  return (
    <div className="flex px-8 sm:px-10 lg-px-16">
      <div className="container mx-auto">
        <FoodMainHeading />
        <FoodBlog />
        <EduEvents />
        <Donate />
        <BuyProducts />
      </div>
    </div>
  );
};

export default FoodSection;
