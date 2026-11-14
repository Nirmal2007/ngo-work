import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  const isSuccess = type === 'success';

  return (
    <div
      role="alert"
      className={`fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 max-w-md p-4 rounded-xl shadow-card border transition-all duration-300 flex items-start gap-3 ${
        isSuccess
          ? 'bg-white border-emerald-300 text-charcoal'
          : 'bg-white border-rose-deep text-charcoal'
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
      ) : (
        <AlertCircle className="w-5 h-5 text-rose-deep flex-shrink-0 mt-0.5" />
      )}
      <div className="flex-1 text-sm font-medium pr-2">{message}</div>
      <button
        onClick={onClose}
        aria-label="Close notification"
        className="text-charcoal-muted hover:text-charcoal transition-colors p-1"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

