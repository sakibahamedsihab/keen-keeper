import { Plus } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Hero = () => {
  const friends = useLoaderData();
  console.log(friends);
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:gap-5 py-6 sm:py-10 px-4 sm:px-0">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1F2937] text-center">
        Friends to keep close in your life
      </h1>
      <p className="text-sm sm:text-base text-[#64748B] text-center max-w-2xl">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>
      <button className="btn bg-[#244D3F] text-white">
        <Plus /> Add a Friend
      </button>
    </div>
  );
};

export default Hero;
