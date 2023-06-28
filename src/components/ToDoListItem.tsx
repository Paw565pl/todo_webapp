interface Props {
  task: string;
}

const ToDoListItem = ({ task }: Props) => {
  return (
    <li className="[&>*]:mr-3 mt-2 ml-4">
      <input type="checkbox" className="scale-150" />
      <span>{task}</span>
      <button className="px-2 py-1 rounded-lg border-2 border-red-600 transition-all hover:bg-red-800">
        Delete
      </button>
    </li>
  );
};

export default ToDoListItem;
