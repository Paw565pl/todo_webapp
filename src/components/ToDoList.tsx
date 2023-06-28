import ToDoListItem from "./ToDoListItem";

interface Props {
  values: string[];
}

const ToDoList = ({ values }: Props) => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl">ToDo List</h1>
      <ul>
        {values.map((value) => (
          <ToDoListItem task={value}></ToDoListItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
