import ReactMarkdown from "react-markdown";
import { Image } from "../Image/Image";
import { ReactMarkdownOptions } from "react-markdown/lib/react-markdown";

export const Markdown = ({ ...props }: ReactMarkdownOptions) => (
  <ReactMarkdown
    components={{
      img: ({ alt, src }) => (
        <Image
          alt={alt}
          src={src ?? ""}
          layout="responsive"
          width={16}
          height={9}
          objectFit="cover"
          sizes="(min-width: 768px) 100vw, (min-width: 1536px) 50vw"
        />
      ),
    }}
    {...props}
  />
);
