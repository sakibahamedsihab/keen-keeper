import { createContext, useEffect, useState } from "react";
import { getFromLocalStorage, saveToLocalStorage } from "../utils/localStorage";
import { toast } from "react-hot-toast";

export const TimelineContext = createContext();

function TimelineContextProvider({ children }) {
  const [interactions, setInteraction] = useState(() => getFromLocalStorage());
  const [filterType, setFilterType] = useState("all");

  const handleSaveTolocalStorage = (interaction) => {
    console.log(interactions);
    const isExist = interactions.find(
      (data) => data.id === interaction.id && data.type === interaction.type,
    );

    if (isExist) {
      toast.error(`${interaction.name} is already Present`);
    } else {
      setInteraction([interaction, ...interactions]);
      toast.success(`${interaction.type} added successfully!`);
    }
  };

  useEffect(() => {
    saveToLocalStorage(interactions);
  }, [interactions]);

  const contexValues = {
    interactions,
    handleSaveTolocalStorage,
    filterType,
    setFilterType,
  };

  return (
    <TimelineContext.Provider value={contexValues}>
      {children}
    </TimelineContext.Provider>
  );
}
export default TimelineContextProvider;
