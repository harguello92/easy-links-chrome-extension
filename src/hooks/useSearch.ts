import { useState } from "preact/hooks";
import { useEffect } from "react";

const useSearch = <T extends Record<string, any>>(items: T[], filterAttributes: string[]) => {
  const [data, setData] = useState<T[]>(items);

  useEffect(() => {
    setData(items);
  }, [items]);

  const onSearch = (query: string) => {
    const filteredData = items.filter((item: T) => {
      return filterAttributes.some((attribute: string) => {
        return item[attribute].toString().toLowerCase().includes(query.toLowerCase());
      });
    });

    setData(filteredData);
  }

  return {
    data,
    onSearch
  }
}

export default useSearch;
