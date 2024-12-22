// src/components/PlaceholderImage.tsx

import React from 'react';

interface PlaceholderImageProps {
  width?: number;
  height?: number;
  id?: number | string;
  grayscale?: boolean;
  blur?: number;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

/**
 * PlaceholderImage Component
 * Generates a placeholder image using Picsum Photos.
 *
 * Props:
 * - width (number): Width of the image in pixels.
 * - height (number): Height of the image in pixels.
 * - id (number|string): Specific image ID from Picsum. If not provided, a random image is fetched.
 * - grayscale (boolean): Apply grayscale effect.
 * - blur (number): Apply blur effect (0-10).
 * - alt (string): Alt text for the image.
 * - className (string): Additional CSS classes.
 * - style (React.CSSProperties): Inline styles.
 * - onClick (function): Click handler.
 */

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({
  width = 1600,
  height = 900,
  id,
  grayscale = false,
  blur = 0,
  alt = 'Placeholder Image',
  className = '',
  style = {},
  onClick,
}) => {
  // Construct the base URL
  let url = `https://picsum.photos/${width}/${height}`;

  // If an ID is provided, use the specific image endpoint
  if (id) {
    url = `https://picsum.photos/id/${id}/${width}/${height}`;
  }

  // Append query parameters for effects
  const params: string[] = [];
  if (grayscale) {
    params.push('grayscale');
  }
  if (blur > 0 && blur <= 10) {
    params.push(`blur=${blur}`);
  }
  if (params.length > 0) {
    url += `?${params.join('&')}`;
  }

  // Handle image loading errors by setting a fallback image
  const handleError: React.ReactEventHandler<HTMLImageElement> = (e) => {
    const target = e.target as HTMLImageElement;
    if (target) {
      target.onerror = null; // Prevent infinite loop if fallback also fails
      target.src = `https://via.placeholder.com/${width}x${height}?text=Image+Not+Found`;
    }
  };

  return (
    <img
      src={url}
      width={width}
      height={height}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      onError={handleError}
    />
  );
};

export default PlaceholderImage;
