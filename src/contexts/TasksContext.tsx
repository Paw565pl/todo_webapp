import { ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export interface Task {
  id: number;
  completed: boolean;
  name: string;
}

interface TasksContextType {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  overrideTasks: (tasksArray: Task[]) => void;
}

export const TasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
  overrideTasks: () => {},
});

interface Props {
  children: ReactNode;
}

export const TasksContextProvider = ({ children }: Props) => {
  const { data, addData, removeData, overrideData } =
    useLocalStorage<Task>("toDoList");

  return (
    <TasksContext.Provider
      value={{
        tasks: data,
        addTask: addData,
        removeTask: removeData,
        overrideTasks: overrideData,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
