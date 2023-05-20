import { deleteBlog, getAllBlogs } from "@/api/blogs/blogs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteProductById, getAllProducts } from "@/api/food/food";

const ProductsTable = () => {
  const { push } = useRouter();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllProducts().then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const handleDeleteBlog = (id) => {
    deleteProductById(id).then((response) => {
      if (!response.success) alert(response.message);
      else {
        push("/profile");
      }
    });
  };
  return (
    <div class="relative overflow-x-auto w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-7">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => {
            return (
              <tr class="bg-secondary-color border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {blog.name}
                </th>
                <td class="px-6 py-4">{blog.description}</td>
                <td class="px-6 py-4">{blog.price}</td>
                <td class="px-6 py-4">
                  <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md mr-2"
                    onClick={() => push(`product/edit/${blog._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md"
                    onClick={() => handleDeleteBlog(blog._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
