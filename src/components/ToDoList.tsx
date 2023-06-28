import ToDoListItem from "./ToDoListItem";

interface Props {
  values: string[];
}

const ToDoList = ({ values }: Props) => {
  return (
    <div className="mt-8">
      {values.length !== 0 && <h1 className="text-2xl">ToDo List</h1>}
      <ul>
        {values.map((value) => (
          <ToDoListItem task={value} key={value}></ToDoListItem>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
