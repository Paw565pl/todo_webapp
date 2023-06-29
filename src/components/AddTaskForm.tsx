import { useContext, useRef } from "react";
import { TasksContext } from "../contexts/TasksContext";

const AddTaskForm = () => {
  const taskInput = useRef<HTMLInputElement>(null);
  const { tasks, addTask } = useContext(TasksContext);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (taskInput.current?.value) {
      addTask({
        id: tasks.length + 1,
        completed: false,
        name: taskInput.current?.value,
      });
      taskInput.current.value = "";
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="w-full">
      <h2 className="mb-1 text-xl font-bold">
        <label htmlFor="newItem">new item</label>
      </h2>
      <input
        ref={taskInput}
        type="text"
        name="newItem"
        placeholder="enter your task here..."
        className="px-1 w-full text-black rounded-md bg-slate-300 focus:outline-double focus:outline-sky-600"
      />
      <div className="mt-4 text-xl">
        <button
          type="submit"
          className="w-1/3 bg-sky-600 rounded-md transition-all hover:bg-sky-400"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
