import React from "react";
import { MessageSquare, Phone, Video, Users } from "lucide-react";

export default function TimelineItem({ interaction }) {
  const iconMap = {
    Text: MessageSquare,
    Meetup: Users,
    Video: Video,
    Call: Phone,
  };

  const style = {
    Text: "bg-sky-100",
    Call: "bg-pink-100",
    Video: "bg-orange-100",
  };

  const IconComponent = iconMap[interaction.type];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex items-center gap-5 shadow-sm mb-4">
      <div
        className={`text-gray-500 p-5 ${style[interaction.type]} rounded-full `}
      >
        <IconComponent size={28} strokeWidth={1.5} />
      </div>

      <div className="flex flex-col">
        <p className="text-[16px] text-gray-500">
          <span className="font-bold text-[#1F2937]">{interaction.type}</span>{" "}
          with {interaction.name}
        </p>

        <p className="text-[13px] text-[#64748B] mt-0.5">{interaction.date}</p>
      </div>
    </div>
  );
}
