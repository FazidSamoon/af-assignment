import { getBlogById } from "@/api/blogs/blogs";
import SingleBlogView from "@/components/molecules/singleBLogView/SingleBlogView";
import Navbar from "@/components/organisms/navbar/Navbar";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();

  useEffect(() => {
    if (id) {
      getBlogById(id).then((response) => {
        if (!response.success) alert(response.message);
        else {
          setPost(response.data);
        }
      });
    }
  }, [id]);
  console.log(post);
  return (
    <div className="">
      <Navbar />
      <SingleBlogView post={post} />
    </div>
  );
};

export default index;
