import { getAllWorkshops, deleteWorkshopById } from '@/api/session/healthcare';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const WorkshopTableComp = () => {
  const { push } = useRouter();
  const [workshops, setWorkshops] = useState([]);

  useEffect(() => {
    getAllWorkshops().then((response) => {
      setWorkshops(response.data);
    });
  }, [workshops]);

  const handleRemove = (id) => {
    deleteWorkshopById(id).then((response) => {
      if (response.success) {
        toast.success('Workshop successfully removed!');
      } else {
        toast.error(response.message);
      }
    });
  };

  return (
    <div class="relative overflow-x-auto w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-7">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Location
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {workshops.map((workshop) => {
            return (
              <tr class="bg-purple-400 border-b text-white">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                >
                  {workshop.title}
                </th>
                <td class="px-6 py-4">{workshop.date}</td>
                <td class="px-6 py-4">{workshop.location}</td>
                <td class="px-6 py-4">
                  <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md"
                    onClick={() =>
                      push(`session/edit-healthcare-workshop/${workshop._id}`)
                    }
                  >
                    Edit
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => handleRemove(workshop._id)}
                  >
                    Remove
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

export default WorkshopTableComp;
