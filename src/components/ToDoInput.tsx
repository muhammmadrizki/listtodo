export const TodoInput = () => {
  return (
    <div className="mb-4 flex">
      <input
        type="text"
        className="w-full px-4 py-2 border rounded-l-lg border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mr-3"
        name=""
        id=""
      />
      <button className="bg-emerald-500 text-white px-6 py-2 rounded-r-lg hover:bg-emerald-700 transition-all ">
        Add
      </button>
    </div>
  );
};
