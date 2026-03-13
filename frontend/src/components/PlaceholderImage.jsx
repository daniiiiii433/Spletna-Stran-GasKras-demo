import React from 'react';

const PlaceholderImage = ({ 
  text = 'Slika po želji', 
  className = '', 
  aspectRatio = 'aspect-square',
  icon = null 
}) => {
  return (
    <div 
      className={`${aspectRatio} bg-stone-100 border-2 border-dashed border-stone-300 rounded-2xl flex flex-col items-center justify-center gap-3 ${className}`}
    >
      {icon && <span className="text-stone-400">{icon}</span>}
      <span className="text-stone-500 text-sm font-medium text-center px-4">{text}</span>
    </div>
  );
};

export default PlaceholderImage;
