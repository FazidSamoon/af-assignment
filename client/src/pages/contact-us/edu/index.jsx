import React from 'react'
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import Image from 'next/image';
import { sendEmail } from '@/api/email/email';

const index = () => {
    const { push } = useRouter();
    const initialValues = {
      name: "",
      email: "",
      country: "",
      concern: "",
    };
    const formik = useFormik({
      initialValues,
      onSubmit: (values) => {
        const data = {
          name: values.name,
          email: values.email,
          country: values.country,
          concern: values.concern,
        };
  
        sendEmail(data).then((response) => {
          if (!response.success) alert(response.message);
          else {
            push("/profile");
          }
        });
      },
      validateOnChange: false,
    });
    const { values, errors, handleChange, handleSubmit } = formik;
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
              CONTACT US
            </h1>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  NAME
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
                  EMAIL
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="email"
                  value={values.author}
                  onChange={handleChange}
                />
                
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  COUNTRY
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="country"
                  value={values.tags}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  YOUR CONCERN
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
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default index