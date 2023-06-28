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
}

export const tasksContext = createContext<TasksContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

interface Props {
  children: ReactNode;
}

export const TasksContextProvider = ({ children }: Props) => {
  const { data, addData, removeData } = useLocalStorage<Task>("toDoList");

  return (
    <tasksContext.Provider
      value={{ tasks: data, addTask: addData, removeTask: removeData }}
    >
      {children}
    </tasksContext.Provider>
  );
};
