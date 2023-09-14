import { useEffect, useState } from 'react';

const useLocalstorage = (key: string, initial: any) => {
  const getValue = () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      return JSON.parse(storage);
    }
    return initial;
  };
  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value.length, value, initial, key]);

  return [value, setValue];
};

export { useLocalstorage };
