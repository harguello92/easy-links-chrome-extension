import { useState } from "preact/hooks";
import { saveConfig } from "../utils/localStorage";
import { Config } from "../types";

const usePersistFile = () => {
  const [error, setError] = useState<string | null>(null);


  const persistFile = (jsonData: Config) => {
    setError(null);

    try {
      console.log("jsonData", jsonData);
      saveConfig(jsonData);
      return true
    } catch (err) {
      setError("Failed to upload file");
      return false
    }
  };

  return {
    error,
    persistFile
  };
}

export default usePersistFile;
