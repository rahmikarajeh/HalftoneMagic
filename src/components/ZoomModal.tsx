import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ZoomModalProps {
  imageUrl: string;
  onClose: () => void;
}

export function ZoomModal({ imageUrl, onClose }: ZoomModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm">
      <div className="relative w-full h-full p-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:text-gray-300 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="w-full h-full flex items-center justify-center">
          <img
            src={imageUrl}
            alt="Zoomed preview"
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}