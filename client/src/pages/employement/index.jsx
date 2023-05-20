import { getAllBlogs } from '@/api/blogs/employement';
import { getAllSessions } from '@/api/session/employement';
import Navbar from '@/components/organisms/navbar/Navbar';
import React, { useEffect, useState } from 'react';
import EduAid from '@/components/molecules/eduAid/EduAid';
import { Dialog } from 'primereact/dialog';

const Index = () => {
  const [blogs, setBlogs] = useState([]);
  const [sessions, setSessions] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    getAllBlogs().then((response) => {
      setBlogs(response.data);
    });
    getAllSessions().then((response) => {
      setSessions(response.data);
    });
  }, []);

  const handleReadMore = (blog) => {
    setSelectedBlog(blog);
    setVisible(true);
  };

  return (
    <div>
      <Navbar />

      <hr className="my-6 mx-12 bg-zinc-800 h-1" />
      <h1 className="text-3xl text-center font-medium mb-6">
        Here are some blogs that you might find interesting
      </h1>
      <hr className="mb-12 mx-12 bg-zinc-800 h-1" />
      <div className="bg-white rounded-lg mx-12 overflow-hidden grid grid-cols-3 gap-12">
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
        Here are some session that you might find interesting
      </h1>
      <hr className="mb-12 mx-12 bg-zinc-800 h-1" />

      <div className="bg-white mx-12 rounded-lg overflow-hidden grid grid-cols-3 gap-12">
        {sessions.map((session) => (
          <div>
            <div
              key={session.id}
              className="rounded-lg border-zinc-800 border-2"
            >
              <div className=" bg-zinc-300">
                <h2 className="text-gray-900 font-bold text-2xl bg-white p-4">
                  {session.title}
                </h2>
                <div className="px-4">
                  <p className="mt-2 text-gray-600">{session.description}</p>
                  <div className="flex justify-between">
                    <p className="mt-2 text-gray-600">
                      <b>speaker:</b> {session.speaker}
                    </p>
                    <p className="mt-2 text-gray-600 mr-5">
                      <b>duration:</b> {session.duration} h
                    </p>
                  </div>
                  <div className="p-4">
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Date:</b>
                      <div className="mr-5">{session.date}</div>
                    </p>
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Time:</b>
                      <div className="mr-5">{session.time}</div>
                    </p>
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Location:</b>
                      <div className="mr-5">{session.location}</div>
                    </p>
                    <p className="text-gray-500 mb-1 text-sm flex justify-between">
                      <b>Capacity:</b>
                      <div className="mr-5">{session.capacity}</div>
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
