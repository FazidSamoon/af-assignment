import Button from "@/components/atoms/Button/Button";
import React from "react";
import { useRouter } from "next/navigation";
import TableComp from "@/components/molecules/table/table";

const EduManagement = () => {
  const { push } = useRouter();
  return (
    <div className="px-6 py-10 relative w-full">
      <span className="text-2xl font-bold">Education content management</span>

      <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5 ">Manage all blogs</span>
        <Button
          text={"Add Blogs"}
          fullWidth={false}
          onClick={() => {
            push("blogs/add-blogs");
          }}
        />

        <TableComp />
      </div>
    </div>
  );
};

export default EduManagement;
