import React from 'react';
import { ZoomIn } from 'lucide-react';

interface ImagePreviewProps {
  title: string;
  imageUrl: string | null;
  onError?: () => void;
  onZoom?: () => void;
}

export function ImagePreview({ title, imageUrl, onError, onZoom }: ImagePreviewProps) {
  return (
    <div className="space-y-2">
      <h2 className="font-medium text-gray-900">{title}</h2>
      <div className="relative aspect-square rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm group">
        {imageUrl ? (
          <>
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-contain"
              onError={onError}
            />
            <button
              onClick={onZoom}
              className="absolute bottom-4 right-4 p-2 bg-black/80 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-black"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image selected
          </div>
        )}
      </div>
    </div>
  );
}