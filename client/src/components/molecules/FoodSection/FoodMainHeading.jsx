import Image from "next/image";
import React from "react";

const FoodMainHeading = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center lg:mt-4">
      <Image
        src="/eduEmpowernment.jpg"
        width={100}
        height={100}
        className="w-full h-full"
      />
      <div className="mt-8 lg:mt-0 lg:ml-4 flex flex-col">
        <span className="text-2xl font-bold">
          Growing Healthy Thriving Minds of the Next Generation
        </span>
        <span className="text-xl mt-4 font-bold">Our purpose</span>
        <span className="mt-4">
          Empower Education believes that every child has the ability to succeed
          in life. However, there are many young people that do not believe they
          have what it takes. This can be due to many factors such as academic
          ability, physical appearance, friendships and their background to name
          a few. These factors can unnecessarily lead a young person to struggle
          with anxiety, depression and anger issues which can eventually have a
          long term impact on their mental health.
        </span>
      </div>
    </div>
  );
};

export default FoodMainHeading;
