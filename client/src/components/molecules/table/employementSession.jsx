import { getAllSessions, deleteSessionById } from '@/api/session/employement';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const SessionTableComp = () => {
  const { push } = useRouter();
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    getAllSessions().then((response) => {
      setSessions(response.data);
    });
  }, [sessions]);

  const handleRemove = (id) => {
    deleteSessionById(id).then((response) => {
      if (response.success) {
        toast.success('Session successfully removed!');
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
              Speaker
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
          {sessions.map((session) => {
            return (
              <tr class="bg-zinc-700 border-b text-white">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white"
                >
                  {session.title}
                </th>
                <td class="px-6 py-4">{session.speaker}</td>
                <td class="px-6 py-4">{session.location}</td>
                <td class="px-6 py-4">
                  <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md"
                    onClick={() =>
                      push(`session/edit-employement-session/${session._id}`)
                    }
                  >
                    Edit
                  </button>
                </td>
                <td class="px-6 py-4">
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => handleRemove(session._id)}
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

export default SessionTableComp;
