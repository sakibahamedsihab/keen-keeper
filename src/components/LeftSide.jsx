import { useLoaderData } from "react-router-dom";
import { currentStyle } from "../../public/helper";
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

function LeftSide() {
  const friend = useLoaderData();
  const { name, picture, status, tags = [], bio, email } = friend;

  console.log(friend);
  return (
    <main className="flex flex-col gap-3 px-4 sm:px-0">
      <div className="p-4 sm:p-10 bg-white rounded-md shadow-md">
        <section className="flex flex-col items-center gap-2">
          <img
            className="w-16 sm:w-20 h-16 sm:h-20 rounded-full"
            src={picture}
            alt={name}
          />
          <h1 className="text-lg sm:text-[20px] font-semibold text-center">
            {" "}
            {name}{" "}
          </h1>
          <p
            className={`px-4 py-1 text-xs font-bold rounded-full w-fit ${currentStyle(status)}`}
          >
            {status}
          </p>
          {tags?.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-green-100 text-green-700 text-[8px] font-bold uppercase tracking-wider rounded-full"
            >
              {tag}
            </span>
          ))}
          <p> {bio} </p>
          <p> {email} </p>
        </section>
      </div>

      <section className="flex flex-col gap-3">
        <div className="p-2 sm:p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h1 className="flex gap-2 font-medium justify-center text-xs sm:text-sm items-center">
            <Bell className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
            <span className="hidden sm:inline">Snooze 2 Weeks</span>
          </h1>
        </div>
        <div className="p-2 sm:p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h1 className="flex gap-2 font-medium justify-center text-xs sm:text-sm items-center">
            <Archive className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
            <span className="hidden sm:inline">Archive</span>
          </h1>
        </div>
        <div className="p-2 sm:p-3 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow cursor-pointer">
          <h1 className="flex gap-2 font-medium justify-center text-xs sm:text-sm text-[#EF4444] items-center">
            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5" />{" "}
            <span className="hidden sm:inline">Delete</span>
          </h1>
        </div>
      </section>
    </main>
  );
}
export default LeftSide;
