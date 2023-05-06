import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import React from "react";

const SingleBlog = ({
  blog
}) => {
  return (
    <div className="flex flex-col mx-2 my-4">
      <Image
        src={blog?.image}
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="mt-8 lg:mt-0 flex flex-col">
        <span className="text-lg font-bold mb-2">
          {blog?.title}
        </span>
        <Button text="Read more" fullWidth={true} />
      </div>
    </div>
  );
};

export default SingleBlog;
