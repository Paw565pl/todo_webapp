import { useContext } from "react";
import { Task, TasksContext } from "../contexts/TasksContext";

interface Props {
  task: Task;
}

const ToDoListItem = ({ task }: Props) => {
  const { tasks, removeTask, overrideTasks } = useContext(TasksContext);

  const handleDoneTask = () => {
    overrideTasks(
      tasks.map((currTask) =>
        currTask.id === task.id
          ? { ...currTask, completed: !currTask.completed }
          : currTask
      )
    );
  };

  return (
    <li className="[&>*]:mr-3 mt-2 ml-4">
      <input
        type="checkbox"
        className="scale-150 hover:cursor-pointer"
        onChange={handleDoneTask}
        checked={task.completed}
      />
      <span className={task.completed ? "text-gray-400" : ""}>{task.name}</span>
      <button
        onClick={() => removeTask(task)}
        className="px-2 py-1 rounded-lg border-2 border-red-600 transition-all hover:bg-red-800"
      >
        Delete
      </button>
    </li>
  );
};

export default ToDoListItem;
