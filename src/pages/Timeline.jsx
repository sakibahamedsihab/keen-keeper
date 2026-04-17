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
    <main className="max-w-285 w-full mx-auto py-6 sm:py-10 px-4 sm:px-0">
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Timeline</h1>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="w-full sm:w-48 px-3 py-2 text-xs sm:text-sm text-gray-600 bg-white border border-gray-200 rounded-lg outline-none focus:border-gray-300 focus:ring-2 focus:ring-gray-100 shadow-sm cursor-pointer mb-6"
        >
          <option value="all" selected>
            Filter timeline
          </option>

          <option value="Call">Call</option>
          <option value="Text">Text</option>
          <option value="Video">Video</option>
        </select>

        <section className="w-full">
          {filteredInteraction.length > 0 ? (
            filteredInteraction.map((interaction) => (
              <TimelineItem key={interaction.id} interaction={interaction} />
            ))
          ) : (
            <div className="p-30 bg-white rounded-xl flex justify-center">
              <h2>No Interaction Found</h2>
            </div>
          )}
        </section>
      </div>
    </main>
  );
};

export default Timeline;
