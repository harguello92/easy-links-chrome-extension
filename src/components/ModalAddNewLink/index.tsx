import { useEffect, useRef, useState } from "preact/hooks";
import Modal from "../Modal";
import { Trash2 } from "lucide-react";
import useAddLinkConfig from "../../hooks/useAddLinkConfig";
import { useToast } from "../../hooks/useToast";

interface ModalAddNewLinkProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalAddNewLink = ({ onClose, isOpen }: ModalAddNewLinkProps) => {
  const [links, setLinks] = useState<{ url: string; name: string; }[]>([]);
  const urlInputRef = useRef<HTMLInputElement>(null);
  const urlNameInputRef = useRef<HTMLInputElement>(null);
  const {
    error: addLinkErrors,
    addLink
  } = useAddLinkConfig();

  const { showError } = useToast();

  useEffect(() => {
    if (addLinkErrors) {
      showError(addLinkErrors);
    }
  }, [addLinkErrors]);

  const handleOnAddLink = () => {
    const url = urlInputRef.current?.value;
    const name = urlNameInputRef.current?.value;

    if (url && name) {
      setLinks([...links, {
        url,
        name
      }]);

      if (urlInputRef.current) {
        urlInputRef.current.value = '';
      }

      if (urlNameInputRef.current) {
        urlNameInputRef.current.value = '';
      }
    }
  }

  const onSubmitLink = (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const _links = [...links];

    addLink({
      name: data.name as string,
      description: data.description as string,
      links: _links
    });

    onClose();
    setLinks([]);
  }

  return <Modal onClose={onClose} isOpen={isOpen}>
    <h3 className="text-lg font-medium mb-4">Add Item Manually</h3>
    <form onSubmit={onSubmitLink} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          type="text"
          name="description"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Links
        </label>
        <div className="space-y-2">
          <div className="flex flex-col gap-2">
            <input
              type="text"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              ref={urlInputRef}
              placeholder="Enter URL"
            />
            <input
              type="text"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
              ref={urlNameInputRef}
              placeholder="Enter name"
            />
            <button
              type="button"
              className="px-3 py-2 rounded-md bg-blue-200 hover:bg-blue-200 cursor-pointer"
              onClick={handleOnAddLink}
            >
              Add Link
            </button>
          </div>
          <ul className="flex gap-2 mt-4 mb-6 flex-col">
            {
              links.map((link, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>{link.name}</span>
                  <span className="text-gray-500">{link.url}</span>
                  <button
                    type="button"
                    className="text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => setLinks(links.filter((_, i) => i !== index))}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full cursor-pointer"
        >
          Add Link
        </button>
      </div>
    </form>
  </Modal >
};

export default ModalAddNewLink;
