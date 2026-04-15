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
      <section className="max-w-285 mx-auto">
        <Hero />
        <FriendCount />
        <h1 className="text-2xl font-semibold">Your Friends</h1>
        <div className="grid grid-cols-4 gap-5 py-10">
          {friends.map((friend) => (
            <FriendCard key={friend.id} friend={friend} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
