import NextImage, { ImageLoader, ImageProps } from "next/image";

const cloudinaryLoader: ImageLoader = ({ src, width, quality = "auto" }) => {
  let url = new URL(src);

  if (url.hostname === "res.cloudinary.com") {
    const parts = url.pathname.split("/");
    const translations = [`w_${width}`, `q_${quality}`, "f_auto"];
    parts.splice(4, 0, translations.join(","));
    url.pathname = parts.join("/");
    console.log(url, parts.join("/"));
  }

  return url.href;
};

export const Image = ({ ...props }: ImageProps) => (
  <NextImage {...props} loader={cloudinaryLoader} />
);
