import { getAllBlogs } from '@/api/blogs/healthcare';
import { getAllWorkshops } from '@/api/session/healthcare';
import Navbar from '@/components/organisms/navbar/Navbar';
import React, { useEffect, useState } from 'react';
import EduAid from '@/components/molecules/eduAid/EduAid';
import { Dialog } from 'primereact/dialog';

const Index = () => {
  const [blogs, setBlogs] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response.data);
    });
    getAllWorkshops().then((response) => {
      setWorkshops(response.data);
    });
  }, []);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setVisible(true);
  };

  return (
    <div className="bg-white">
      <Navbar />

      <hr className="my-6 mx-12 bg-zinc-800 h-1" />
      <h1 className="text-3xl text-center font-medium mb-6">
        Here are some blogs that you might find interesting
      </h1>
      <hr className="mb-12 mx-12 bg-zinc-800 h-1" />
      <div className="bg-white mx-12 rounded-lg overflow-hidden grid grid-cols-3 gap-12">
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

      <hr className="mt-12 mb-6 mx-12 bg-zinc-800 h-1" />
      <h1 className="text-3xl text-center font-medium mb-6">
        Here are some workshops that you might find interesting
      </h1>
      <hr className="mb-12 mx-12 bg-zinc-800 h-1" />

      <div className="bg-white mx-12 rounded-lg overflow-hidden grid grid-cols-3 gap-12">
        {workshops.map((workshops) => (
          <div>
            <div
              key={workshops.id}
              className="rounded-lg border-zinc-800 border-2"
            >
              <div className=" bg-purple-200">
                <h2 className="text-gray-900 font-bold text-2xl bg-white p-4">
                  {workshops.title}
                </h2>
                <div className="p-4">
                  <p className="mt-2 text-gray-600">{workshops.description}</p>
                  <p className="mt-2 text-gray-600">
                    <b>atendees:</b> {workshops.atendees}
                  </p>

                  <div className="mt-4">
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Date:</b>
                      <div className="mr-5">{workshops.date}</div>
                    </p>
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Time:</b>{' '}
                      <div className="mr-5">
                        {workshops.startTime} to {workshops.endTime}
                      </div>
                    </p>
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Location:</b>
                      <div className="mr-5">{workshops.location}</div>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <EduAid />
    </div>
  );
};

export default Index;
