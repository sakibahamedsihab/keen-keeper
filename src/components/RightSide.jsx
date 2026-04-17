import { useLoaderData } from "react-router-dom";
import {
  Phone,
  MessageSquare,
  Video,
  Bell,
  Archive,
  Trash2,
  Clock,
  History,
} from "lucide-react";

import { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";

import { formatDate } from "../../public/helper";
import HistoryItem from "./HistoryItem";

function RightSide() {
  const friend = useLoaderData();
  const { handleSaveTolocalStorage } = useContext(TimelineContext);

  const onInteractiveClick = (interactionType) => {
    const newInteraction = {
      id: Date.now(),
      name: friend.name,
      type: interactionType,
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    };

    handleSaveTolocalStorage(newInteraction);
  };

  const recentInteractions = [
    {
      id: 1,
      type: "Text",
      note: "Asked for career advice",
      date: "Jan 28, 2026",
    },
    {
      id: 2,
      type: "Meetup",
      note: "Industry conference meetup",
      date: "Jan 28, 2026",
    },
    {
      id: 3,
      type: "Video",
      note: "Asked for career advice",
      date: "Jan 28, 2026",
    },
    {
      id: 4,
      type: "Text",
      note: "Asked for career advice",
      date: "Jan 28, 2026",
    },
  ];

  return (
    <main className="flex flex-col gap-3">
      <section>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
            <span className="text-xl sm:text-2xl text-[#244D3F] font-bold">
              {friend.days_since_contact}
            </span>
            <h1 className="text-sm sm:text-[18px] text-center">
              Days Since Contact
            </h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
            <span className="text-xl sm:text-2xl text-[#244D3F] font-bold">
              {friend.goal}
            </span>
            <h1 className="text-sm sm:text-[18px] text-center">Goal (days)</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center p-4 sm:p-8 bg-white shadow-sm rounded-sm">
            <span className="text-xl sm:text-2xl text-[#244D3F] font-bold">
              {formatDate(friend.next_due_date)}
            </span>
            <h1 className="text-sm sm:text-[18px] text-center">
              Need Attention
            </h1>
          </div>
        </div>
      </section>

      <section className="p-4 sm:p-6 bg-white shadow-sm rounded-sm">
        <div className="flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-center mb-2">
          <h1 className="text-base sm:text-[20px] text-[#244D3F] font-medium">
            Relationship Goal
          </h1>
          <button className="btn btn-soft btn-sm sm:btn-md">Edit</button>
        </div>
        <p className="text-sm sm:text-base">
          Connect every{" "}
          <span className="font-semibold text-base sm:text-lg">
            {friend.goal} days
          </span>
        </p>
      </section>

      <section className="p-4 sm:p-6 bg-white shadow-sm rounded-sm">
        <h1 className="mb-3 sm:mb-4 text-[#244D3F] text-base sm:text-[20px] font-medium">
          Quick Check-In
        </h1>
        <section>
          <div className="grid grid-cols-3 gap-2 sm:gap-5">
            <div
              onClick={() => onInteractiveClick("Call")}
              className="cursor-pointer flex flex-col gap-1 sm:gap-2 items-center justify-center px-3 sm:px-8 py-3 sm:py-4 bg-[#F8FAFC] shadow-sm rounded-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xs sm:text-[18px] flex flex-col items-center gap-1 sm:gap-2">
                <Phone className="w-4 h-4 sm:w-6 sm:h-6" />{" "}
                <span className="hidden sm:inline">Call</span>
              </span>
            </div>
            <div
              onClick={() => onInteractiveClick("Text")}
              className="cursor-pointer flex flex-col gap-1 sm:gap-2 items-center justify-center px-3 sm:px-8 py-3 sm:py-4 bg-[#F8FAFC] shadow-sm rounded-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xs sm:text-[18px] flex flex-col items-center gap-1 sm:gap-2">
                <MessageSquare className="w-4 h-4 sm:w-6 sm:h-6" />{" "}
                <span className="hidden sm:inline">Text</span>
              </span>
            </div>
            <div
              onClick={() => onInteractiveClick("Video")}
              className="cursor-pointer flex flex-col gap-1 sm:gap-2 items-center justify-center px-3 sm:px-8 py-3 sm:py-4 bg-[#F8FAFC] shadow-sm rounded-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xs sm:text-[18px] flex flex-col items-center gap-1 sm:gap-2">
                <Video className="w-4 h-4 sm:w-6 sm:h-6" />{" "}
                <span className="hidden sm:inline">Video</span>
              </span>
            </div>
          </div>
        </section>
      </section>

      {/* Call history section */}
      <section className="flex flex-col p-4 sm:p-5 bg-white rounded-md shadow-md">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
          <h1 className="text-[#244D3F] text-base sm:text-[20px] font-semibold">
            Recent Interactions
          </h1>
          <button className="btn btn-soft btn-sm sm:btn-md flex gap-2 bg-[#F8FAFC] w-full sm:w-auto justify-center">
            <History className="w-4 h-4 sm:w-5 sm:h-5" /> Full History
          </button>
        </div>
        {recentInteractions.map((interaction) => (
          <HistoryItem key={interaction.id} interaction={interaction} />
        ))}
      </section>
    </main>
  );
}
export default RightSide;
