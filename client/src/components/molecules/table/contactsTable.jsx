import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteEvents, getAllEvents } from "@/api/events/events";
import { getAllEmails } from "@/api/email/email";

const ContactUsTable = () => {
  const { push } = useRouter();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getAllEmails().then((response) => {
        setEvents(response.data);
    });
  }, []);

  return (
    <div class="relative overflow-x-auto w-full">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-7">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              Email
            </th>
            <th scope="col" class="px-6 py-3">
              Name
            </th>
            <th scope="col" class="px-6 py-3">
              Concern
            </th>
            <th scope="col" class="px-6 py-3">
              Country
            </th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => {
            return (
              <tr class="bg-secondary-color border-b">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {event.email}
                </th>
                <td class="px-6 py-4">{event.name}</td>
                <td class="px-6 py-4">{event.concern}</td>
                <td class="px-6 py-4">{event.country}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUsTable;
