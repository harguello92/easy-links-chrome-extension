import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "preact/hooks";
import { checkUrlStatus } from "../../utils/urlCheck";
import { ConfigItemViewModelType } from "../../models/ConfigItemViewModel";

const getStatusColorClass = (percent: number): string => {
  if (percent < 50) {
    return "bg-red-700"
  }

  if (percent < 75) {
    return "bg-yellow-600"
  }

  return "bg-green-600"
};

interface StatusIndicatorProps {
  links: ConfigItemViewModelType['links'];
}

const StatusIndicator = ({ links }: StatusIndicatorProps) => {
  const [loading, setLoading] = useState(true);
  const [statusPercent, setStatusPercent] = useState<number>(0);

  useEffect(() => {
    const checkStatuses = async () => {
      const response = await Promise.all(links.map(link => checkUrlStatus(link.url)));

      const onlineServices = response.filter(Boolean).length;
      const totalServices = response.length;

      setStatusPercent(onlineServices / totalServices * 100);

      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }

    checkStatuses();
  }, [])

  if (loading) {
    return <LoaderCircle className="w-4 h-4 text-gray-400 animate-spin" />
  }


  return <span className={`w-4 h-4 rounded-full ${getStatusColorClass(statusPercent)}`}></span>
}

export default StatusIndicator;
