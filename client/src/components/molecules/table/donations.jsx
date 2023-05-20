import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteEvents, getAllEvents } from "@/api/events/events";
import { getAllDonations } from "@/api/food/food";

const Donations = () => {
  const { push } = useRouter();
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    getAllDonations().then((response) => {
        setDonations(response.data);
    });
  }, []);

  const handleDeleteEvent = (id) => {
    deleteEvents(id).then((response) => {
      if (!response.success) alert(response.message);
      else {
        push("/profile");
      }
    });
  };
  return (
    <div class="relative overflow-x-auto w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-7">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Amount
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {donations.map((event) => {
            return (
              <tr class="bg-secondary-color border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {event.name}
                </th>
                <td class="px-6 py-4">{event.email}</td>
                <td class="px-6 py-4">{event.amount}</td>
                <td class="px-6 py-4">{event.createdAt}</td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Donations;
