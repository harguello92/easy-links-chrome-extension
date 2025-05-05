import { createContext, ReactNode, useContext, useState } from "preact/compat";
import Toast, { ToastProps } from "../components/Toast";

export type ToastContextType = {
  toasts: ToastItem[];
  addToast: (toast: Omit<ToastItem, "id">) => string;
  removeToast: (id: string) => void;
};


const ToastContext = createContext(null as unknown as ToastContextType);

type ToastContextProps = {
  children: ReactNode;
}

export interface ToastItem extends ToastProps {
  id: string;
}

export const ToastProvider = ({ children }: ToastContextProps) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const addToast = (toast: Omit<ToastItem, "id">) => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }]);
    return id;
  };

  const removeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const value: ToastContextType = {
    toasts,
    addToast,
    removeToast
  }

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          duration={toast.duration}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </ToastContext.Provider>
  );
};

const useToastContext = () => useContext(ToastContext);

export default useToastContext;
