import { X } from "lucide-react";
import { createPortal } from "preact/compat";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return <>
    {
      createPortal(isOpen && (
        <div className="absolute left-0 top-0 z-50 w-full h-full bg-white">
          <header className="flex justify-end h-[40px]">
            <button
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </header>
          <div className="pt-0 px-4 pb-4">
            {children}
          </div>
        </div>
      ), document.getElementById('modal-root') as HTMLElement)
    }
  </>
};

export default Modal;
