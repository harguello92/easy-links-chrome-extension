import { PlusCircle, Server, Upload } from "lucide-react";
import { useState } from "preact/hooks";
import ModalAddNewItem from "../ModalAddNewItem";
import Image from "../Image";
import useUploadFile from "../../hooks/useUploadFile";
import { useEffect } from "react";
import { useToast } from "../../hooks/useToast";
import useJSONReadFile from "../../hooks/useJSONReadFile";
interface HeaderProps {
  logoUrl: string;
}

const Header = ({ logoUrl }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showError } = useToast();

  const {
    error: uploadFileError,
    uploadFile
  } = useUploadFile({ errorManager: showError });

  const { readFile, error: readFileError } = useJSONReadFile({ errorManager: showError });

  useEffect(() => {
    if (uploadFileError) {
      showError(uploadFileError);
    }

    if (readFileError) {
      showError(readFileError);
    }
  }, [uploadFileError, readFileError]);

  const handleFileUpload = async () => {
    const file = await uploadFile();

    if (!file) {
      showError("No file selected");
      return;
    }

    const jsonData = await readFile(file);
    console.log("File content:", jsonData);
  };

  return (
    <>
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image src={logoUrl} alt="Logo">
            <Server className="w-5 h-5 text-indigo-600" />
            <h1 className="text-lg font-semibold text-gray-900">LinksApp</h1>
          </Image>
        </div>
        <div className="flex items-center">
          <div title="Add New Item">
            <PlusCircle className="w-6 h-6 text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer" onClick={() => {
              setIsModalOpen(true)
            }} />
          </div>
          <div title="Upload File">
            <Upload className="w-6 h-6 text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer ml-4" onClick={handleFileUpload} />
          </div>
        </div>
      </header>
      <ModalAddNewItem isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
