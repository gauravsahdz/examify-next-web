"use client";
import Image from "next/image";
import React, { use, useCallback } from "react";

type ImageWrapperProps = {
  src: string;
  alt: string;
  fallbackSrc: string;
  height?: number;
  width?: number;
  divStyle?: string;
  className?: string;
  handleImageClick?: () => void;
};

const ImageWrapper = ({
  src,
  alt,
  fallbackSrc,
  height,
  width,
  divStyle,
  className,
  handleImageClick,
}: ImageWrapperProps) => {
  const handleError = useCallback(
    (e: any) => {
      e.target.src = fallbackSrc;
    },
    [fallbackSrc]
  );
  return (
    <div className={divStyle}>
      <Image
        src={src as string}
        alt={alt}
        onError={handleError}
        height={height}
        width={width}
        className={className}
        onClick={handleImageClick}
      />
    </div>
  );
};

export default ImageWrapper;
