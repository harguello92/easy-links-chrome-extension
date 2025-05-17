import { useState } from "preact/hooks";
import { Config } from "../types";

const useValidateConfig = () => {
  const [error, setError] = useState<string | null>(null);


  const validateConfig = (jsonData: Config) => {
    if (!Array.isArray(jsonData)) {
      setError("Invalid JSON format. Expected an array.");
      return false;
    }

    for (const service of jsonData) {
      if (typeof service.name !== "string") {
        setError("Invalid service name. Expected a string.");
        return false;
      }

      if (!Array.isArray(service.links)) {
        setError("Invalid links format. Expected an array.");
        return false;
      }

      for (const link of service.links) {
        if (typeof link.name !== "string") {
          setError("Invalid link name. Expected a string.");
          return false;
        }

        if (typeof link.url !== "string") {
          setError("Invalid link URL. Expected a string.");
          return false;
        }
      }
    }

    return true;
  };

  return {
    error,
    validateConfig
  };
}

export default useValidateConfig;
