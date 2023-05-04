import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import React from "react";

const SingleBlog = () => {
  return (
    <div className="flex flex-col mx-2 my-4">
      <Image
        src="/eduEmpowernment.jpg"
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="mt-8 lg:mt-0 flex flex-col">
        <span className="text-lg font-bold mb-2">
          Growing Healthy Thriving Minds of the Next Generation
        </span>
        <Button text="Read more" fullWidth={true} />
      </div>
    </div>
  );
};

export default SingleBlog;
