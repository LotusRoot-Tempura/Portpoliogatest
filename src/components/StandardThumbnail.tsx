import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StandardThumbnailProps {
  imageSrc: string;
  alt: string;
  className?: string;
}

export function StandardThumbnail({ imageSrc, alt, className = "" }: StandardThumbnailProps) {
  return (
    <div 
      className={`bg-[#ffffff] rounded size-[74px] relative shrink-0 ${className}`}
      data-name="Standard Thumbnail"
    >
      <div className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded" />
      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative size-[74px]">
        <div className="shrink-0 size-[52px] rounded overflow-hidden flex items-center justify-center">
          <ImageWithFallback
            src={imageSrc}
            alt={alt}
            className="w-full h-full object-contain rounded"
            style={{ maxWidth: '52px', maxHeight: '52px' }}
          />
        </div>
      </div>
    </div>
  );
}