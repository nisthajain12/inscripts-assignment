import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState(2);
  const sheets = ['Sheet 1', 'Sheet 2', 'Spreadsheet 3'];

  return (
    <div className="w-44 h-full bg-gray-50 border-r text-sm py-4 px-2 flex flex-col gap-1">
      {sheets.map((sheet, i) => (
        <div
          key={sheet}
          onClick={() => {
            setActive(i);
            console.log(`Switched to ${sheet}`);
          }}
          className={`px-4 py-2 cursor-pointer rounded-md transition-all ${
            i === active
              ? 'bg-violet-200 text-violet-900 font-semibold'
              : 'hover:bg-violet-50 text-gray-700'
          }`}
        >
          {sheet}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
