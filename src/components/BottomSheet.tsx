import React from 'react';
import { X } from 'lucide-react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export function BottomSheet({ isOpen, onClose, children, title }: BottomSheetProps) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-[fadeIn_200ms]"
        onClick={onClose}
      />
      <div className="fixed inset-x-0 bottom-0 z-50 bg-white rounded-t-[32px] max-h-[85vh] overflow-y-auto animate-[slideUp_300ms]">
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 bg-neutral-400 rounded-full" />
        </div>
        {title && (
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-300">
            <h5>{title}</h5>
            <button onClick={onClose} className="text-neutral-600 touch-target">
              <X size={24} />
            </button>
          </div>
        )}
        <div className="p-5 safe-area-bottom">
          {children}
        </div>
      </div>
    </>
  );
}
