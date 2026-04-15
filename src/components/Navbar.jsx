import { ChartLine, Clock3, House } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <main className="shadow-sm py-4 bg-white z-10">
      <div className="max-w-300 mx-auto flex justify-between items-center">
        <div>
          <h1 className="font-bold text-2xl">
            Keen<span className="text-[#244D3F]">Keeper</span>
          </h1>
        </div>

        <ul className="flex gap-5">
          <NavLink
            className={({ isActive }) =>
              `font-semibold px-4 py-3 rounded-lg ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : " text-[#64748B]"}`
            }
            to={"/"}
          >
            <span className="flex gap-2 items-center">
              <House />
              Home
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold px-4 py-3 rounded-lg ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : " text-[#64748B]"}`
            }
            to={"timeline"}
          >
            <span className="flex gap-2 items-center">
              <Clock3 />
              Timeline
            </span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-semibold px-4 py-3 rounded-lg ${isActive ? "text-[#FFFFFF] bg-[#244D3F]" : " text-[#64748B]"}`
            }
            to={"stats"}
          >
            <span className="flex gap-2 items-center">
              <ChartLine />
              Stats
            </span>
          </NavLink>
        </ul>
      </div>
    </main>
  );
}
