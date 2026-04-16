export const statusStyles = {
  overdue: "bg-red-500 text-white",
  "almost due": "bg-yellow-500 text-white",
  "on-track": "bg-[#244D3F] text-white", // Using your KeenKeeper theme dark green
};
export const currentStyle = (status) =>
  statusStyles[status] || "bg-gray-200 text-gray-700";

export function formatDate(dateString) {
  if (!dateString) return "No date set";

  const [year, month, day] = dateString.split("-");

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
