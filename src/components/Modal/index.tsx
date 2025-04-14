interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed flex items-center justify-center z-50 w-full h-full">
      <div className="bg-white relative">
        <button
          className="absolute top-0 left-0 text-gray-500 hover:text-gray-700 text-2xl font-bold cursor-pointer"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
