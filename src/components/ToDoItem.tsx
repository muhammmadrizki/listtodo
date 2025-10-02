export const TodoItem = () => {
  const completed: boolean = true;

  return (
    <li
      className={`flex items-center justify-between p-4 rounded-lg shadow-md${
        completed ? "bg-gray-200 line-through" : "bg-teal-300"
      }`}
    >
      <span
        className={`cursor-pointe ${
          completed ? "text-gray-600" : "todo-gray-800"
        }`}
      >
        Todo Item
      </span>
      <button className="text-red-500 hover:text-red-600 transition-all">
        Delete
      </button>
    </li>
  );
};
