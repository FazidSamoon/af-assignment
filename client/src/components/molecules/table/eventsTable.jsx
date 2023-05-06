import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { deleteEvents, getAllEvents } from "@/api/events/events";

const EventTable = () => {
  const { push } = useRouter();
  const [events, setEvents] = useState([]);
  useEffect(() => {
    getAllEvents().then((response) => {
        setEvents(response.data);
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
              Title
            </th>
            <th scope="col" class="px-6 py-3">
              Description
            </th>
            <th scope="col" class="px-6 py-3">
              Venue
            </th>
            <th scope="col" class="px-6 py-3">
              Date
            </th>
            <th scope="col" class="px-6 py-3">
              Time
            </th>
            <th scope="col" class="px-6 py-3">
              Actions
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
                  {event.title}
                </th>
                <td class="px-6 py-4">{event.description}</td>
                <td class="px-6 py-4">{event.venue}</td>
                <td class="px-6 py-4">{event.date}</td>
                <td class="px-6 py-4">{event.time}</td>
                <td class="px-6 py-4">
                  <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md"
                    onClick={() => push(`event/edit/${event._id}`)}
                  >
                    Edit
                  </button>

                  <button
                    className="bg-primary-color text-white px-4 py-2 rounded-md"
                    onClick={() => handleDeleteEvent(event._id)}
                  >
                    Delete
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

export default EventTable;
