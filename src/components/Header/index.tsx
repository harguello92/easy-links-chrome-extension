import { PlusCircle, Server } from "lucide-react";
import { useEffect, useState } from "preact/hooks";
import ModalAddNewItem from "../ModalAddNewItem";

interface HeaderProps {
  logoUrl: string;
}

const Header = ({ logoUrl }: HeaderProps) => {
  const [imageExists, setImageExists] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };

    img.src = logoUrl;
  }, []);

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {imageExists ?
            <img src={logoUrl} className="h-6" alt="Logo" /> :
            <>
              <Server className="w-5 h-5 text-indigo-600" />
              <h1 className="text-lg font-semibold text-gray-900">LinksApp</h1>
            </>
          }
        </div>
        <div className="flex items-center">
          <PlusCircle className="w-6 h-6 text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer" onClick={() => {
            setIsModalOpen(true)
          }} />
        </div>
      </header>
      <ModalAddNewItem isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
