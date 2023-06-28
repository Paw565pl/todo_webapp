import { ReactNode, createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

interface tasksContextType {
  tasks: string[];
  addTask: (task: string) => void;
  removeTask: (task: string) => void;
}

export const tasksContext = createContext<tasksContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {},
});

interface Props {
  children: ReactNode;
}

export const TasksContextProvider = ({ children }: Props) => {
  const { data, addData, removeData } = useLocalStorage<string>("toDoList");

  return (
    <tasksContext.Provider
      value={{ tasks: data, addTask: addData, removeTask: removeData }}
    >
      {children}
    </tasksContext.Provider>
  );
};
