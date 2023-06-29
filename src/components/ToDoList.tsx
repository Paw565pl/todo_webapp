import { useContext } from "react";
import ToDoListItem from "./ToDoListItem";
import { TasksContext } from "../contexts/TasksContext";

const ToDoList = () => {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="mt-8">
      {tasks.length !== 0 && <h1 className="text-2xl">ToDo List</h1>}
      <ul>
        {tasks.map((task) => (
          <ToDoListItem task={task} key={task.id}></ToDoListItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
