import AddTaskForm from "./components/AddTaskForm";

const App = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-6 mt-10 sm:mx-32 md:mx-48 lg:mx-72 xl:mx-96">
      <AddTaskForm></AddTaskForm>
      <div></div>
    </div>
  );
};

export default App;
