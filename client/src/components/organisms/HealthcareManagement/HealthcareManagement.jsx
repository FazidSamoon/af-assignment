import Button from '@/components/atoms/Button/Button';
import { useRouter } from 'next/router';
import React from 'react';
import TableComp from '@/components/molecules/table/healthcare';

const HealthcareManagement = () => {
  const { push } = useRouter();
  return (
    <div className="px-6 py-10 relative w-full">
      <span className="text-2xl font-bold">Healthcare content management</span>

      <div className="mt-10 flex flex-col w-full">
        <span className="text-xl font-semibold mb-5 ">Manage all blogs</span>
        <Button
          text={'Add Blogs'}
          fullWidth={false}
          onClick={() => {
            push('blogs/add-healthcare-blogs');
          }}
        />

        <TableComp />
      </div>
    </div>
  );
};

export default HealthcareManagement;
