import { Todo } from "./pages/ToDoList";

export function App() {
  return (
    <div>
      <h1 className="bg-gray-100 p-4 text-4xl text-black flex justify-center">
        Hello My To Do
      </h1>
      <Todo />
    </div>
  );
}
