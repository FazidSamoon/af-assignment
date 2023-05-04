import { getAllBlogs } from "@/api/blogs/blogs";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const TableComp = () => {
    const { push } = useRouter();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response.data);
    });
  }, []);
  return (
    <div class="relative overflow-x-auto w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-7">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Author
            </th>
            <th scope="col" class="px-6 py-3">
              Tags
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
                  {blog.title}
                </th>
                <td class="px-6 py-4">{blog.author}</td>
                <td class="px-6 py-4">{blog.tags}</td>
                <td class="px-6 py-4">
                  <button className="bg-primary-color text-white px-4 py-2 rounded-md" onClick={() => push(`blogs/edit/${blog._id}`)}>
                    Edit
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

export default TableComp;
