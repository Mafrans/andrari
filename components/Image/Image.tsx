import NextImage, { ImageLoader, ImageProps } from "next/image";

const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  const url = new URL(src);

  if (url.hostname === "res.cloudinary.com") {
    const parts = url.pathname.split("/");
    const translations = [`w_${width}`, `q_${quality}`];
    url.pathname = parts.splice(4, 0, translations.join(",")).join("/");
  }

  return url.href;
};

export const Image = ({ ...props }: ImageProps) => (
  <NextImage {...props} loader={cloudinaryLoader} />
);
