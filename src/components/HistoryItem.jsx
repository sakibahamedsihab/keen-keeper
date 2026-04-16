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
    <div className="flex justify-between p-5 border-b last:border-0 border-gray-300">
      <div className="flex gap-2 items-center">
        <IconComponent />
        <div>
          <p className="text-[18px]">{interaction.type}</p>
          <p className="text-[#64748B]"> {interaction.note} </p>
        </div>
      </div>
      <p className="text-[#64748B]"> {interaction.date} </p>
    </div>
  );
}
export default HistoryItem;
