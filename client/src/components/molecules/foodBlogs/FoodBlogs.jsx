import React, { useEffect } from "react";
import SingleBlog from "./SingleBlog";
import { getAllBlogs, getAllFoodBlogs } from "@/api/blogs/blogs";

const FoodBlogs = () => {
  const [blogs, setBlogs] = React.useState([]);
  useEffect(() => {
    getAllFoodBlogs().then((response) => {
      setBlogs(response.data);
    });
  }, []);
  return (
    <div className="mt-16">
      <div className="flex flex-col">
        <span className="text-2xl font-bold">
          Here are some blogs that you might find interesting
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(blogs) &&
            blogs.map((blog) => {
              return <SingleBlog blog={blog} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default FoodBlogs;
