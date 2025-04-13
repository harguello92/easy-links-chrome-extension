import { useState } from "preact/hooks";

const useSearch = <T extends Record<string, any>>(initialData: T[], filterAttributes: string[]) => {
  const [data, setData] = useState<T[]>(initialData);

  const onSearch = (query: string) => {
    const filteredData = initialData.filter((item: T) => {
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
