import Button from "@/components/atoms/Button/Button";
import React from "react";
import { useRouter } from "next/navigation";
import TableComp from "@/components/molecules/table/table";
import EventTable from "@/components/molecules/table/eventsTable";
import FoodBlogComp from "@/components/molecules/table/foodBlogComp";
import Donations from "@/components/molecules/table/donations";
import Products from "@/components/molecules/Products/Products";

const FoodManagement = () => {
  const { push } = useRouter();
  return (
    <div className="px-6 py-10 relative w-full">
      <span className="text-2xl font-bold">Food content management</span>

      <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5 ">Manage all blogs</span>
        <Button
          text={"Add Blogs"}
          onClick={() => {
            push("blogs/add-blogs/food");
          }}
        />

        <FoodBlogComp />
      </div>

      <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5 ">All Donations</span>
        {/* <Button
          text={"Add Event"}
          onClick={() => {
            push("blogs/add-event");
          }}
        /> */}

        <Donations />
      </div>

      <Products />
    </div>
  );
};

export default FoodManagement;
