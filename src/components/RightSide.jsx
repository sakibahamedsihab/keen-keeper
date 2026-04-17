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
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
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
        <div className=" grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2 items-center justify-center p-8 bg-white shadow-sm rounded-sm">
            <span className="text-2xl text-[#244D3F] font-bold">
              {friend.days_since_contact}
            </span>
            <h1 className="text-[18px]">Days Since Contact</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center p-8 bg-white shadow-sm rounded-sm">
            <span className="text-2xl text-[#244D3F] font-bold">
              {friend.goal}
            </span>
            <h1 className="text-[18px]">Goal (days)</h1>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center p-8 bg-white shadow-sm rounded-sm">
            <span className="text-2xl text-[#244D3F] font-bold">
              {formatDate(friend.next_due_date)}
            </span>
            <h1 className="text-[18px]">Need Attention</h1>
          </div>
        </div>
      </section>

      <section className="p-6 bg-white shadow-sm rounded-sm">
        <div className="flex justify-between gap-2">
          <h1 className="text-[20px] text-[#244D3F] font-medium">
            Relationship Goal
          </h1>
          <button className="btn btn-soft">Edit</button>
        </div>
        <p>
          Connect every{" "}
          <span className="font-semibold text-lg">{friend.goal} days</span>
        </p>
      </section>

      <section className="p-6 bg-white shadow-sm rounded-sm">
        <h1 className="mb-2 text-[#244D3F] text-[20px] font-medium">
          Quick Check-In
        </h1>
        <section>
          <div className=" grid grid-cols-3 gap-5">
            <div
              onClick={() => onInteractiveClick("Call")}
              className="cursor-pointer flex flex-col gap-2 items-center justify-center px-8 py-4 bg-[#F8FAFC] shadow-sm rounded-sm"
            >
              <span className="text-[18px] flex flex-col items-center gap-2">
                <Phone /> Call
              </span>
            </div>
            <div
              onClick={() => onInteractiveClick("Text")}
              className="cursor-pointer flex flex-col gap-2 items-center justify-center px-8 py-4 bg-[#F8FAFC] shadow-sm rounded-sm"
            >
              <span className="text-[18px] flex flex-col items-center gap-2">
                <MessageSquare /> Text
              </span>
            </div>
            <div
              onClick={() => onInteractiveClick("Video")}
              className="cursor-pointer flex flex-col gap-2 items-center justify-center px-8 py-4 bg-[#F8FAFC] shadow-sm rounded-sm"
            >
              <span className="text-[18px] flex flex-col items-center gap-2">
                <Video /> Video
              </span>
            </div>
          </div>
        </section>
      </section>

      {/* Call history section */}
      <section className="flex flex-col p-5 bg-white rounded-md shadow-md">
        <div className="flex justify-between items-center">
          <h1 className="text-[#244D3F] text-[20px] font-semibold">
            Recent Interactions
          </h1>
          <button className="btn btn-soft flex gap-2 bg-[#F8FAFC]">
            <History /> Full History
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
