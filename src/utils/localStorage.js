export const getFromLocalStorage = () => {
  const allTimelineData = localStorage.getItem("data");
  if (allTimelineData) {
    return JSON.parse(allTimelineData);
  } else {
    return [];
  }
};

export const saveToLocalStorage = (allTimelineData) => {
  localStorage.setItem("data", JSON.stringify(allTimelineData));
};
