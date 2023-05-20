import Button from '@/components/atoms/Button/Button';
import { useRouter } from 'next/router';
import React from 'react';
import TableComp from '@/components/molecules/table/healthcare';
import WorkshopTableComp from '@/components/molecules/table/healthcareWorkshop';

const HealthcareManagement = () => {
  const { push } = useRouter();
  return (
    <div className="px-6 py-10 relative w-full">
      <span className="text-2xl font-bold">Healthcare content management</span>

      <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5 ">Manage all blogs</span>

        <button
          className="flex px-4 py-2 bg-purple-400 items-center justify-center text-white rounded-md"
          onClick={() => {
            push('blogs/add-healthcare-blogs');
          }}
        >
          Add Blogs
        </button>

        <TableComp />

        <span className="text-xl font-semibold mb-5 mt-5">
          Manage all workshops
        </span>

        <button
          className="flex px-4 py-2 bg-purple-400 items-center justify-center text-white rounded-md"
          onClick={() => {
            push('session/healthcare-workshop');
          }}
        >
          Add Workshops
        </button>

        <WorkshopTableComp />
      </div>
    </div>
  );
};

export default HealthcareManagement;
