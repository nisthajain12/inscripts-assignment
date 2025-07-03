import { FaUserCircle, FaSearch, FaUpload, FaDownload, FaShareAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 border-b shadow-sm">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600">
        <span className="text-gray-500 font-medium">Workspace</span> &gt;{" "}
        <span className="font-medium text-gray-600">Folder 2</span> &gt;{" "}
        <span className="font-semibold text-black">Spreadsheet 3</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3">
        {/* Search box */}
        <div className="relative">
          <FaSearch className="absolute top-2.5 left-2 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 pr-3 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Buttons */}
        <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
          <FaUpload />
          Import
        </button>
        <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
          <FaDownload />
          Export
        </button>
        <button className="flex items-center gap-1 px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
          <FaShareAlt />
          Share
        </button>

        {/* Avatar stack */}
        <div className="flex -space-x-3">
          <div className="w-8 h-8 rounded-full bg-green-600 border-2 border-white text-white flex items-center justify-center text-xs font-bold">
            A
          </div>
          <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-white text-white flex items-center justify-center text-xs font-bold">
            J
          </div>
          <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-white text-white flex items-center justify-center text-xs font-bold">
            K
          </div>
        </div>

        {/* Profile + Action */}
        <FaUserCircle size={26} className="text-gray-600" />
        <button className="px-4 py-1.5 bg-green-600 text-white text-sm font-medium rounded hover:bg-green-700">
          + New Action
        </button>
      </div>
    </div>
  );
};

export default Header;
