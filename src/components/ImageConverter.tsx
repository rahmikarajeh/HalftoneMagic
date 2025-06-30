import React from 'react';
import { ArrowRight, RefreshCw } from 'lucide-react';

interface ImageConverterProps {
  imageUrl: string;
  loading: boolean;
  error: string;
  onUrlChange: (url: string) => void;
  onConvert: () => void;
}

export function ImageConverter({ imageUrl, loading, error, onUrlChange, onConvert }: ImageConverterProps) {
  return (
    <div className="px-2">
      <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-900 mb-2">
        Image URL
      </label>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => onUrlChange(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="flex-1 rounded-xl bg-white border border-gray-200 p-3 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-black focus:border-transparent shadow-sm"
        />
        <button
          onClick={onConvert}
          disabled={loading}
          className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {loading ? (
            <RefreshCw className="w-5 h-5 animate-spin" />
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
          Convert
        </button>
      </div>
      {error && <p className="mt-2 text-red-500 text-sm">{error}</p>}
    </div>
  );
}