//import { Server } from "lucide-react";

import { Server } from "lucide-react";
import { useEffect, useState } from "preact/hooks";


const Header = () => {
  const [imageExists, setImageExists] = useState(false)

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };

    img.src = "/logo.svg";
  }, []);

  return <header className="bg-white border-b border-gray-200 px-4 py-3">
    <div className="flex items-center space-x-2">
      {imageExists ? <img src="/logo.svg" className="h-6" alt="Logo" /> :
        <>
          <Server className="w-5 h-5 text-indigo-600" />
          <h1 className="text-lg font-semibold text-gray-900">LinksApp</h1>
        </>
      }
    </div>
  </header>
};

export default Header;
