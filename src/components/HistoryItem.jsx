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

function HistoryItem({ interaction }) {
  const iconMap = {
    Text: MessageSquare,
    Meetup: Phone, // You can change this to a 'Users' or 'Coffee' icon if you prefer!
    Video: Video,
    Call: Phone,
  };

  const IconComponent = iconMap[interaction.type];
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 p-3 sm:p-5 border-b last:border-0 border-gray-300 sm:items-center">
      <div className="flex gap-2 sm:gap-3 items-start sm:items-center flex-1">
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-1 sm:mt-0" />
        <div className="flex-1">
          <p className="text-sm sm:text-[18px] font-medium">
            {interaction.type}
          </p>
          <p className="text-xs sm:text-sm text-gray-600">
            {" "}
            {interaction.note}{" "}
          </p>
        </div>
      </div>
      <p className="text-xs sm:text-sm text-gray-500 flex-shrink-0">
        {" "}
        {interaction.date}{" "}
      </p>
    </div>
  );
}
export default HistoryItem;
