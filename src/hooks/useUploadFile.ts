import { useState } from "preact/hooks";
import { createUploadElement, handleFileUpload } from "../utils/fileUpload";

const useUploadFile = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  const uploadFile = async () => {
    setIsUploading(true);
    setError(null);

    try {
      const input = createUploadElement();
      const file = await handleFileUpload(input)

      if (!file) {
        setError("No file selected");
        return;
      }

      return file;
    } catch (err) {
      setError("Failed to upload file");
    } finally {
      setIsUploading(false);
    }
  };

  return {
    isUploading,
    error,
    uploadFile
  };
}

export default useUploadFile;
