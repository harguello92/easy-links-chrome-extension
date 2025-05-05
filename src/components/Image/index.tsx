import { useEffect, useState } from "preact/hooks";

interface ImageProps {
  src: string;
  className?: string;
  alt: string;
  children?: React.ReactNode;
}

const Image = ({ src, className, alt, children }: ImageProps) => {
  const [imageExists, setImageExists] = useState(false)

  useEffect(() => {
    const img = document.createElement('img');

    img.onload = () => {
      setImageExists(true);
    };

    img.onerror = () => {
      setImageExists(false);
    };

    img.src = src;
  }, []);

  return (imageExists ? <img src={src} className={className} alt={alt} /> : children)
};

export default Image;
