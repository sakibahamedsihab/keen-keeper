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
    <div className="bg-white border border-gray-200 rounded-lg p-3 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-5 shadow-sm mb-4">
      <div
        className={`text-gray-500 p-3 sm:p-5 ${style[interaction.type]} rounded-full flex-shrink-0`}
      >
        <IconComponent size={24} strokeWidth={1.5} className="sm:w-7 sm:h-7" />
      </div>

      <div className="flex flex-col flex-1">
        <p className="text-sm sm:text-[16px] text-gray-500">
          <span className="font-bold text-[#1F2937]">{interaction.type}</span>{" "}
          with {interaction.name}
        </p>

        <p className="text-xs sm:text-[13px] text-[#64748B] mt-0.5">
          {interaction.date}
        </p>
      </div>
    </div>
  );
}
