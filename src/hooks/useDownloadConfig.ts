import { useState } from "preact/hooks";
import { downloadFile } from "../utils/files";
import { getConfig } from "../utils/localStorage";

const useDownloadConfig = () => {
  const [error, setError] = useState<string | null>(null);

  const downloadConfig = () => {
    setError(null);

    try {
      const config = getConfig();
      downloadFile("config.json", JSON.stringify(config, null, 2));
    } catch (err) {
      setError("Failed to download file");
    }
  }

  return {
    error,
    downloadConfig,
  };
}

export default useDownloadConfig;
