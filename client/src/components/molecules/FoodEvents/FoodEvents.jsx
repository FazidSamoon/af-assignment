import React from "react";
import SingleBlog from "../eduBlogs/SingleBlog";
import SingleEvent from "./SingleEvent";
import { getAllEvents } from "@/api/events/events";

const FoodEvents = () => {
  const [events, setEvents] = React.useState([]);
  React.useEffect(() => {
    getAllEvents().then((response) => {
      setEvents(response.data);
    });
  }, []);
  return (
    <div className="flex flex-col mt-16">
      <span className="text-2xl font-bold">
        Here are some events that you might find interesting
      </span>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(events) &&
          events.map((event) => {
            return <SingleEvent event={event} />;
          })}
      </div>
    </div>
  );
};

export default FoodEvents;
