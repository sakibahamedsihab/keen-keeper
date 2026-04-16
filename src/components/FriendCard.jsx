import React from "react";
import { Link } from "react-router-dom";

export default function FriendCard({ friend }) {

  const statusStyles = {
    overdue: "bg-red-500 text-white",
    "almost due": "bg-yellow-500 text-white",
    "on-track": "bg-[#244D3F] text-white", 
  };


  const formatStatus = (status) => {
    if (status === "on-track") return "On-Track";
    if (status === "almost due") return "Almost Due";
    if (status === "overdue") return "Overdue";
    return status;
  };


  const currentStyle = (status) =>
    statusStyles[status] || "bg-gray-200 text-gray-700";

  return (
    <Link to={`/details/${friend.id}`}>
      <div className="bg-white rounded-sm shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center transition-shadow hover:shadow-md h-full">
        {/* Avatar */}
        <img
          src={friend.picture}
          alt={friend.name}
          className="w-16 h-16 rounded-full object-cover mb-3"
        />

        <section className="flex flex-col flex-1">
          {/* Name */}
          <h2 className="text-lg font-bold text-[#1F2937]">{friend.name}</h2>

          <p className="text-xs text-gray-400 mb-4">
            {friend.days_since_contact}d ago
          </p>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {friend.tags?.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase tracking-wider rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
        {/* Status Badge */}
        <span
          className={`px-4 py-1 text-xs font-bold rounded-full ${currentStyle(friend.status)}`}
        >
          {formatStatus(friend.status)}
        </span>
      </div>
    </Link>
  );
}
