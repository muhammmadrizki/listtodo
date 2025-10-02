// type Todo = {};

import { TodoInput } from "../components/ToDoInput";
import { TodoItem } from "../components/ToDoItem";

export function Todo() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-6">
          To Do List
        </h1>
        <TodoInput />
        <ul className="space-y-4">
          <TodoItem />
        </ul>
      </div>
    </div>
  );
}
