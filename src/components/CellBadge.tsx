const CellBadge = ({ value }: { value: string }) => {
  const badgeStyles: { [key: string]: string } = {
    "In-process": "bg-yellow-100 text-yellow-800 border border-yellow-300",
    "Need to start": "bg-blue-100 text-blue-700 border border-blue-300",
    "Complete": "bg-green-100 text-green-800 border border-green-300",
    "Blocked": "bg-red-100 text-red-800 border border-red-300",
    "Low": "bg-blue-100 text-blue-800 border border-blue-200",
    "Medium": "bg-yellow-100 text-yellow-800 border border-yellow-200",
    "High": "bg-red-100 text-red-800 border border-red-300",
  };

  return (
    <span
      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
        badgeStyles[value] || "bg-gray-100 text-gray-800 border"
      }`}
    >
      {value}
    </span>
  );
};

export default CellBadge;
