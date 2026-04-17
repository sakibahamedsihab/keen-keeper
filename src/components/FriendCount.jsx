import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendCount = () => {
  const friends = useLoaderData();
  //   console.log(friends);

  const onTrack = friends.filter(
    (friend) => friend.status === "on-track",
  ).length;

  const needAttention = friends.filter(
    (friend) => friend.status === "overdue" || friend.status == `almost due`,
  ).length;

  const InteractionThisMonth = friends.filter(
    (friend) => friend.days_since_contact <= 30,
  ).length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 py-6 sm:py-10">
      <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
        <span className="text-2xl sm:text-4xl text-[#244D3F] font-bold">
          {friends.length}
        </span>
        <h1 className="text-sm sm:text-[18px] text-center">Total Friends</h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
        <span className="text-2xl sm:text-4xl text-[#244D3F] font-bold">
          {onTrack}
        </span>
        <h1 className="text-sm sm:text-[18px] text-center">On Track</h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
        <span className="text-2xl sm:text-4xl text-[#244D3F] font-bold">
          {needAttention}
        </span>
        <h1 className="text-sm sm:text-[18px] text-center">Need Attention</h1>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
        <span className="text-2xl sm:text-4xl text-[#244D3F] font-bold">
          {InteractionThisMonth}
        </span>
        <h1 className="text-sm sm:text-[18px] text-center">
          Interactions This Month
        </h1>
      </div>
    </div>
  );
};

export default FriendCount;
