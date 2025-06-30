import React from 'react';

const sampleImages = [
  {
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=200',
    title: 'Yosemite Valley'
  },
  {
    url: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=200',
    title: 'Mountain Lake'
  },
  {
    url: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=200',
    title: 'Misty Forest'
  },
  {
    url: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=1200',
    thumbnail: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?w=200',
    title: 'Alpine Lake'
  }
];

interface SampleImagesProps {
  onSelectImage: (url: string) => void;
}

export function SampleImages({ onSelectImage }: SampleImagesProps) {
  return (
    <div className="space-y-4 px-2">
      <h2 className="font-medium text-gray-900">Sample Images</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {sampleImages.map((image) => (
          <button
            key={image.url}
            onClick={() => onSelectImage(image.url)}
            className="group relative aspect-square rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm"
          >
            <img
              src={image.thumbnail}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute bottom-3 left-3 right-3 text-sm text-white font-medium">
                {image.title}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}