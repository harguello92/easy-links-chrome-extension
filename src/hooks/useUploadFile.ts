import { useState } from "preact/hooks";
import { createUploadElement, handleFileUpload } from "../utils/fileUpload";

type UseUploadFileProps = {
  errorManager?: (error: string) => void;
};

const useUploadFile = ({ errorManager }: UseUploadFileProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const uploadFile = async () => {
    setIsUploading(true);
    setError(null);

    try {
      const input = createUploadElement();
      const file = await handleFileUpload(input)

      if (!file) {
        if (errorManager) {
          errorManager("No file selected");
        }

        setError("No file selected");
        return;
      }

      return file
    } catch (err) {
      if (errorManager) {
        errorManager("No file selected");
      }

      setError("Failed to upload file");
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    error,
    uploadFile,
  };
}

export default useUploadFile;
