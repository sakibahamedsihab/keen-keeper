import { ChartLine, Clock3, House } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <main className="shadow-sm py-3 sm:py-4 bg-white z-10">
      <div className="max-w-300 mx-auto flex justify-between items-center px-4 sm:px-0">
        <div>
          <h1 className="font-bold text-xl sm:text-2xl">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </h1>
        </div>

        <ul className="flex gap-2 sm:gap-5">
          <NavLink
            className={({ isActive }) =>
              `font-semibold px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : " text-[#64748B]"}`
            }
            to={"/"}
          >
            <span className="flex gap-1 sm:gap-2 items-center">
              <House className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Home</span>
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : " text-[#64748B]"}`
            }
            to={"timeline"}
          >
            <span className="flex gap-1 sm:gap-2 items-center">
              <Clock3 className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Timeline</span>
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-xs sm:text-sm ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : " text-[#64748B]"}`
            }
            to={"stats"}
          >
            <span className="flex gap-1 sm:gap-2 items-center">
              <ChartLine className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden sm:inline">Stats</span>
            </span>
          </NavLink>
        </ul>
      </div>
    </main>
  );
}
