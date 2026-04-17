import React from "react";
import Hero from "../components/Hero";
import { useLoaderData } from "react-router-dom";

import FriendCount from "../components/FriendCount";
import FriendCard from "../components/FriendCard";
const Home = () => {
  const friends = useLoaderData();

  console.log(friends);
  return (
    <main className="bg-[#F8FAFC]">
      <section className="max-w-285 mx-auto px-4 sm:px-0">
        <Hero />
        <FriendCount />
        <h1 className="text-xl sm:text-2xl font-semibold">Your Friends</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 py-6 sm:py-10">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
