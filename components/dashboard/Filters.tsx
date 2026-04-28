const Filters = () => {
  return (
    <div className="flex gap-3 mb-5 text-gray-500">
      <select className="border border-gray-300 rounded-md px-3 py-2">
        <option>Date Range</option>
      </select>

      <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
        <option>Status</option>
      </select>
    </div>
  );
}

export default Filters;