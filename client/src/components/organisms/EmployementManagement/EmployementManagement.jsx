import Button from '@/components/atoms/Button/Button';
import { useRouter } from 'next/router';
import React from 'react';
import TableComp from '@/components/molecules/table/employement';
import SessionTableComp from '@/components/molecules/table/employementSession';

const EmployementManagement = () => {
  const { push } = useRouter();
  return (
    <div className="px-6 py-10 relative w-full">
      <span className="text-2xl font-bold">Employement content management</span>

      <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5">Manage all blogs</span>

        <button
          className="flex px-4 py-2 bg-zinc-700 items-center justify-center text-white rounded-md"
          onClick={() => {
            push('blogs/add-employement-blogs');
          }}
        >
          Add Blogs
        </button>

        <TableComp />

        <span className="text-xl font-semibold mb-5 mt-5">
          Manage all sessions
        </span>

        <button
          className="flex px-4 py-2 bg-zinc-700 items-center justify-center text-white rounded-md"
          onClick={() => {
            push('session/employement-session');
          }}
        >
          Add Session
        </button>

        <SessionTableComp />
      </div>
    </div>
  );
};

export default EmployementManagement;
