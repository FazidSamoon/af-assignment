import FoodEvents from "@/components/molecules/FoodEvents/FoodEvents";
import FoodMainHeading from "@/components/molecules/FoodSection/FoodMainHeading";
import FoodAid from "@/components/molecules/foodAid/FoodAid";
import FoodBlogs from "@/components/molecules/foodBlogs/FoodBlogs";
import React from "react";

const FoodSection = () => {
  return (
    <div className="flex px-8 sm:px-10 lg-px-16">
      <div className="container mx-auto">
        <FoodMainHeading />
        <FoodBlogs />
        <FoodEvents/>
        <FoodAid />
      </div>
    </div>
  );
};

export default FoodSection;
