import { useContext } from "react";
import ToDoListItem from "./ToDoListItem";
import { tasksContext } from "../contexts/tasksContext";

const ToDoList = () => {
  const { tasks } = useContext(tasksContext);

  return (
    <div className="mt-8">
      {tasks.length !== 0 && <h1 className="text-2xl">ToDo List</h1>}
      <ul>
        {tasks.map((task) => (
          <ToDoListItem task={task} key={task}></ToDoListItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
