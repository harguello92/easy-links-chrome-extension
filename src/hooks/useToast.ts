import useToastContext from "../contexts/ToastContext";

export const useToast = () => {
  const context = useToastContext();

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }

  const { addToast, removeToast } = context;

  const showSuccess = (message: string, duration = 3000) => {
    return addToast({ message, type: 'success', duration });
  };

  const showError = (message: string, duration = 3000) => {
    return addToast({ message, type: 'error', duration });
  };

  const showWarning = (message: string, duration = 3000) => {
    return addToast({ message, type: 'warning', duration });
  };

  const showInfo = (message: string, duration = 3000) => {
    return addToast({ message, type: 'info', duration });
  };

  return {
    addToast,
    removeToast,
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};
