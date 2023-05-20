import Image from "next/image";
import React from "react";

const SingleBlogView = ({
    post,
}) => {
  return (
    <div className="flex px-8 sm:px-10 lg-px-16">
      <div className="container mx-auto flex flex-col">
        <div className="h-1/3">
          <Image
            src={post?.image ?? "/eduEmpowernment.png"}
            width={100}
            height={0}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="flex flex-col items-start justify-center mt-5">
          <h1 className="text-3xl font-bold text-gray-900">{post?.title ?? ""}</h1>

          <span className="text-lg mt-2">by {post?.author ?? ""}</span>
          <span className="text-lg mt-2">
            {new Date(post?.createdAt).toUTCString()}
          </span>
        </div>
        <div className="mt-6">
          {post?.description ?? ""}
        </div>
      </div>
    </div>
  );
};

export default SingleBlogView;
