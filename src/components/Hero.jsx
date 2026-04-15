import { Plus } from "lucide-react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const Hero = () => {
  const friends = useLoaderData();
  console.log(friends);
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-10">
      <h1 className="text-5xl font-bold text-[#1F2937]">
        Friends to keep close in your life
      </h1>
      <p className="text-[#64748B]">
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
