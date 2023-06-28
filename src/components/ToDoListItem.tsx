import { useContext } from "react";
import { tasksContext } from "../contexts/tasksContext";

interface Props {
  task: string;
}

const ToDoListItem = ({ task }: Props) => {
  const { removeTask } = useContext(tasksContext);

  return (
    <li className="[&>*]:mr-3 mt-2 ml-4">
      <input type="checkbox" className="scale-150" />
      <span>{task}</span>
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
