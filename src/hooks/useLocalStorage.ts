import { useEffect, useState } from "react";

const useLocalStorage = <T>(storageName: string) => {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem(storageName) || "[]"));
  }, []);

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

  return { data, addData, removeData };
};

export default useLocalStorage;
