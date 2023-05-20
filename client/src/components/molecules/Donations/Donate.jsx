import Link from 'next/link';
import React from 'react'
import { FiArrowRight } from 'react-icons/fi';

const Donate = () => {
    return (
        <div className="flex flex-col bg-secondary-color py-10 px-6 items-center justify-center my-14">
          <span className="text-2xl font-bold text-white"></span>
          <span className="text-2xl font-bold text-white">
            Lets donate and make someone's day better
          </span>
    
          <Link href={"/donate"}>
            <div className="mt-8 flex items-center justify-center">
              <span className="text-xl font-semibold text-white">Donate</span>
              <FiArrowRight className="text-white ml-5 text-lg" />
            </div>
          </Link>
        </div>
      );
}

export default Donate