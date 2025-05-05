import { useState } from "preact/hooks";
import { readFileAsJson } from "../utils/fileUpload";

type UseJSONReadFileProps = {
  errorManager?: (error: string) => void;
};

const useJSONReadFile = ({ errorManager }: UseJSONReadFileProps) => {
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const readFile = async (file: File) => {
    setIsReading(true);
    setError(null);

    try {
      const fileContent = await readFileAsJson(file);
      const jsonData = JSON.parse(fileContent);
      return jsonData;
    } catch (err) {
      if (errorManager) {
        errorManager("Failed to read file");
      }

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
