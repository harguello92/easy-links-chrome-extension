import { useState } from "preact/hooks";
import { Config } from "../types";

const useValidateConfig = () => {
  const [error, setError] = useState<string | null>(null);


  const validateConfig = (jsonData: Config) => {
    const { logo, items } = jsonData;

    if (logo !== undefined && typeof logo !== "string") {
      setError("Logo must be a string");
      return false;
    }

    if (!Array.isArray(items)) {
      setError("Items must be an array");
      return false;
    }

    for (const item of items) {
      if (typeof item.name !== "string") {
        setError("Item name must be a string");
        return false;
      }

      if (!Array.isArray(item.links)) {
        setError("Item links must be an array");
        return false;
      }

      for (const link of item.links) {
        if (typeof link.name !== "string") {
          setError("Link name must be a string");
          return false;
        }

        if (typeof link.url !== "string") {
          setError("Link URL must be a string");
          return false;
        }
      }
    }

    setError(null);
    return true;
  }

  return {
    error,
    validateConfig
  };
}

export default useValidateConfig;
