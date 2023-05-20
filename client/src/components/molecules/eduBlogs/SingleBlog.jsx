import Button from "@/components/atoms/Button/Button";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

const SingleBlog = ({
  blog
}) => {
  const { push } = useRouter();
  return (
    <div className="flex flex-col mx-2 my-4" onClick={() => {
      push(`/blogs/read/${blog?._id}`);
    }}>
      <Image
        src={blog?.image}
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="mt-8 lg:mt-0 flex flex-col">
        <span className="text-lg font-bold mb-2">{blog?.title}</span>
        <Button text="Read more" fullWidth={true} />
      </div>
    </div>
  );
};

export default SingleBlog;
