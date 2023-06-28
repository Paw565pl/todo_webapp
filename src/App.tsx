import AddTaskForm from "./components/AddTaskForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="flex flex-col mx-6 mt-10 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96">
      <AddTaskForm></AddTaskForm>
      <ToDoList values={["washing", "cleaning"]}></ToDoList>
    </div>
  );
};

export default App;
