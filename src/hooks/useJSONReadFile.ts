import { useState } from "preact/hooks";
import { readFileAsJson } from "../utils/fileUpload";

const useJSONReadFile = () => {
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const readFile = async (file: File) => {
    setIsReading(true);
    setError(null);

    try {
      return readFileAsJson(file);
    } catch (err) {
      setError("Failed to read file");
    } finally {
      setIsReading(false);
    }
  }

  return {
    isReading,
    error,
    readFile,
  };
}

export default useJSONReadFile;
