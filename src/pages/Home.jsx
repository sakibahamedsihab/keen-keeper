import { Plus } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* top section */}
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-5xl font-bold text-[#1F2937]">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748B] text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br /> relationships that matter most.
        </p>
        <span>
          <button className="btn">
            <Plus /> Add a Friend
          </button>
        </span>
      </div>

      {/* middle section */}
      <div></div>

      {/* Card */}
    </main>
  );
}
