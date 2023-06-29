import { useContext } from "react";
import { Task, tasksContext } from "../contexts/tasksContext";

interface Props {
  task: Task;
}

const ToDoListItem = ({ task }: Props) => {
  const { removeTask, addTask } = useContext(tasksContext);

  const handleDoneTask = () => {
    addTask({
      id: task.id,
      completed: !task.completed,
      name: task.name,
    });
    removeTask(task);
  };

  return (
    <li className="[&>*]:mr-3 mt-2 ml-4">
      <input
        type="checkbox"
        className="scale-150"
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
