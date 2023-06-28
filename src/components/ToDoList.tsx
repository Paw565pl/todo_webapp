import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  return (
    <div className="mt-8">
      <h1 className="text-2xl">ToDo List</h1>
      <ul>
        <ToDoListItem task="test"></ToDoListItem>
        <ToDoListItem task="test"></ToDoListItem>
        <ToDoListItem task="test"></ToDoListItem>
        <ToDoListItem task="test"></ToDoListItem>
      </ul>
    </div>
  );
};

export default ToDoList;
