import AddTaskForm from "./components/AddTaskForm";
import ToDoList from "./components/ToDoList";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const { data, addData, removeData } = useLocalStorage();

  return (
    <div className="flex flex-col mx-6 mt-10 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96">
      <AddTaskForm handleAddingTask={addData}></AddTaskForm>
      <ToDoList values={data}></ToDoList>
    </div>
  );
};

export default App;
