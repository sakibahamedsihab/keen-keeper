import React, { useContext } from "react";
import { TimelineContext } from "../Context/TimelineContext";
import TimelineItem from "../components/TimelineItem";

const Timeline = () => {
  const { interactions, filterType, setFilterType } =
    useContext(TimelineContext);

  const filteredInteraction = interactions.filter((interaction) => {
    if (filterType === "all") {
      return true;
    } else {
      return interaction.type === filterType;
    }
  });

  return (
    <main className="max-w-285 w-full mx-auto py-10">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold">Timeline</h1>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-48 px-3 py-2 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 shadow-sm cursor-pointer mb-6"
        >
          <option value="all" selected>
            Filter timeline
          </option>

          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        <section className="w-full">
          {filteredInteraction.map((interaction) => (
            <TimelineItem key={interaction.id} interaction={interaction} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default Timeline;
