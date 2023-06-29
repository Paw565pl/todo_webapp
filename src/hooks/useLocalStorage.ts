import { useState } from "react";

const useLocalStorage = <T>(storageName: string) => {
  const [data, setData] = useState<T[]>(
    JSON.parse(localStorage.getItem(storageName) || "[]")
  );

  const addData = (value: T) => {
    setData((prev) => {
      const newArr = [...prev, value];
      localStorage.setItem(storageName, JSON.stringify(newArr));
      return newArr;
    });
  };

  const removeData = (value: T) => {
    setData((prev) => {
      const filteredArr = prev.filter((el) => el !== value);
      localStorage.setItem(storageName, JSON.stringify(filteredArr));
      return filteredArr;
    });
  };

  const overrideData = (value: T[]) => {
    localStorage.setItem(storageName, JSON.stringify(value));
    setData(value);
  };

  return { data, addData, removeData, overrideData };
};

export default useLocalStorage;
