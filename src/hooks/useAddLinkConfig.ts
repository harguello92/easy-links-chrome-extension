import { useState } from "preact/hooks";
import { getConfig, saveConfig } from "../utils/localStorage";
import { ConfigItem } from "../types";

const useAddLinkConfig = () => {
  const [error, setError] = useState<string | null>(null);

  const addLink = async (itemLink: ConfigItem) => {
    setError(null);

    try {
      const config = getConfig();
      saveConfig({
        ...config,
        items: [itemLink, ...config.items]
      });
    } catch (err) {
      setError("Failed to add link");
    }
  };

  return {
    error,
    addLink
  };
}

export default useAddLinkConfig;
