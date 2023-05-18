import { getBlogById, updateBlog } from '@/api/blogs/employement';
import { useFormik } from 'formik';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import FileBase from 'react-file-base64';
import { toast } from 'react-toastify';

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const { push } = useRouter();
  const initialValues = {
    title: '',
    description: '',
    image: '',
    author: '',
    tags: [],
  };

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const data = {
        title: values.title,
        description: values.description,
        image: values.image,
        author: values.author,
        tags: values.tags,
      };

      updateBlog(id, data).then((response) => {
        if (!response.success) toast.error(response.message);
        else {
          toast.success('Blog successfully updated!');
          push('/profile');
        }
      });
    },
    validateOnChange: false,
  });
  const { values, errors, handleChange, handleSubmit } = formik;

  useEffect(() => {
    if (id) {
      getBlogById(id).then((response) => {
        if (!response.success) alert(response.message);
        else {
          formik.setValues(response.data);
        }
      });
    }
  }, [id]);
  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            className="w-8 h-8 mr-2"
            src="/logo.png"
            width={100}
            height={100}
            alt="logo"
          />
          <span className="font-bold text-xl text-secondary-color">
            <span className="text-primary-color">CHARITY</span> LIFE
          </span>
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              EDIT BLOG
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  TITLE
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="title"
                  value={values.title}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  type="password"
                  name="description"
                  id="description"
                  placeholder="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={values.description}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  TAGS
                </label>
                <input
                  type="text"
                  name="tags"
                  id="tags"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="tags"
                  value={values.tags}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  AUTHOR
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="author"
                  value={values.author}
                  onChange={handleChange}
                />
              </div>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => formik.setFieldValue('image', base64)}
              />
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-white bg-zinc-800 hover:bg-zinc-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
