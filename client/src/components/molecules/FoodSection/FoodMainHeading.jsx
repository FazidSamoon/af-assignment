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
          Fueling Your Body and Mind: Empowering Yourself Through Food
        </span>
        <span className="text-xl mt-4 font-bold">Our purpose</span>
        <span className="mt-4">
          Empowering food donation is a vital tool in the fight against hunger
          and malnutrition. By donating healthy and nutritious food to those in
          need, we can improve their physical and mental health, enhance their
          quality of life, and create positive change in our communities.
          Empowering food donation programs aim to address the root causes of
          food insecurity, such as poverty, unemployment, and lack of access to
          healthy food options. Through these initiatives, we can provide
          individuals and families with the support they need to overcome these
          challenges and lead healthier, more fulfilling lives. Empowering food
          donation also fosters a sense of community and social responsibility,
          as we work together to make a difference in the lives of others.
        </span>
      </div>
    </div>
  );
};

export default FoodMainHeading;
