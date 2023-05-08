import { getAllBlogs } from '@/api/blogs/employement';
import Navbar from '@/components/organisms/navbar/Navbar';
import React, { useEffect, useState } from 'react';
import { Dialog } from 'primereact/dialog';

const Index = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response.data);
    });
  }, []);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setVisible(true);
  };

  return (
    <div className="">
      <Navbar />

      <div className="bg-white shadow-lg rounded-lg overflow-hidden grid grid-cols-3 gap-4">
        {blogs.map((blog) => (
          <div key={blog.id}>
            <img
              className="w-full h-56 object-cover object-center"
              src={blog.image}
              alt={blog.title}
            />
            <div className="p-4">
              <h2 className="text-gray-900 font-bold text-2xl">{blog.title}</h2>
              <p className="mt-2 text-gray-600">
                {blog.description.substr(0, 500) + `...`}
              </p>
              <div className="flex justify-between mt-4">
                <p className="text-gray-500 text-sm font-medium">
                  {blog.author}
                </p>
                <button
                  className="text-sm font-medium text-primary-color hover:text-primary-dark"
                  onClick={() => handleReadMore(blog)}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        header={selectedBlog ? selectedBlog.title : ''}
        visible={visible}
        style={{ width: '50vw' }}
        onHide={() => setVisible(false)}
      >
        <p className="m-0">{selectedBlog ? selectedBlog.description : ''}</p>
      </Dialog>
    </div>
  );
};

export default Index;
