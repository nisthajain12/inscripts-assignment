import { FaSort, FaFilter } from "react-icons/fa";
import { BiLayer, BiDotsVerticalRounded } from "react-icons/bi";
import { HiOutlineViewGridAdd } from "react-icons/hi";

const Toolbar = () => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 border-b text-sm text-gray-700">
      <button className="flex items-center gap-1 px-3 py-1 rounded-md bg-white hover:bg-gray-100 border text-gray-800 shadow-sm">
        Tool bar ▾
      </button>

      <button className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 border text-gray-700">
        <BiLayer className="text-gray-500" />
        Hide fields
      </button>

      <button className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 border text-gray-700">
        <FaSort className="text-gray-500" />
        Sort
      </button>

      <button className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 border text-gray-700">
        <FaFilter className="text-gray-500" />
        Filter
      </button>

      <button className="flex items-center gap-1 px-3 py-1 rounded-md hover:bg-gray-100 border text-gray-700">
        <HiOutlineViewGridAdd className="text-gray-500" />
        Cell view
      </button>

      <button className="ml-auto p-1 hover:bg-gray-200 rounded">
        <BiDotsVerticalRounded size={18} />
      </button>
    </div>
  );
};

export default Toolbar;
