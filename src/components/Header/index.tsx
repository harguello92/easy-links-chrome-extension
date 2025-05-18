import { FileDown, PlusCircle, Server, Upload } from "lucide-react";
import { useState } from "preact/hooks";
import ModalAddNewItem from "../ModalAddNewLink";
import Image from "../Image";
import useUploadConfig from "../../hooks/useUploadConfig";
import { useEffect } from "react";
import { useToast } from "../../hooks/useToast";
import useJSONReadFile from "../../hooks/useJSONReadFile";
import usePersistFile from "../../hooks/usePersistFile";
import useValidateConfig from "../../hooks/useValidateConfig";
import useDownloadConfig from "../../hooks/useDownloadConfig";
interface HeaderProps {
  logoUrl?: string;
}

const Header = ({ logoUrl }: HeaderProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { showError, showSuccess } = useToast();

  const {
    error: uploadFileError,
    uploadFile
  } = useUploadConfig();

  const {
    readFile,
    error: readFileError
  } = useJSONReadFile();

  const {
    persistFile,
    error: persistFileError
  } = usePersistFile();

  const {
    validateConfig,
    error: validateConfigError
  } = useValidateConfig();

  const {
    error: downloadFileError,
    downloadConfig
  } = useDownloadConfig();

  useEffect(() => {
    if (uploadFileError) {
      showError(uploadFileError);
    }

    if (readFileError) {
      showError(readFileError);
    }

    if (persistFileError) {
      showError(persistFileError);
    }

    if (validateConfigError) {
      showError(validateConfigError);
    }

    if (downloadFileError) {
      showError(downloadFileError);
    }
  }, [
    uploadFileError,
    readFileError,
    persistFileError,
    validateConfigError,
    downloadFileError
  ]);

  const handleFileUpload = async () => {
    const file = await uploadFile();

    if (!file) {
      showError("No file selected");
      return;
    }

    const jsonData = await readFile(file);
    const isValid = validateConfig(jsonData);

    if (isValid) {
      const isFilePersisted = persistFile(jsonData);

      if (isFilePersisted) {
        showSuccess("File uploaded successfully");
      }
    }
  };

  const handleFileDownload = async () => {
    downloadConfig();
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
          <div title="Add new link">
            <PlusCircle className="w-6 h-6 text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer" onClick={() => {
              setIsModalOpen(true)
            }} />
          </div>
          <div title="Download config file">
            <FileDown className="w-6 h-6 text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer ml-4" onClick={handleFileDownload} />
          </div>
          <div title="Upload config file">
            <Upload className="w-6 h-6 text-indigo-600 hover:text-indigo-800 hover:scale-105 cursor-pointer ml-4" onClick={handleFileUpload} />
          </div>
        </div>
      </header>
      <ModalAddNewItem isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Header;
