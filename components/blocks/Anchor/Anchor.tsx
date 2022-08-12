import clsx from "clsx";
import dynamic from "next/dynamic";
import { ComponentType, ElementType } from "react";
import { IconType } from "react-icons";
import { Component } from "../../../types/components";
import { LazyIcon } from "../../LazyIcon/LazyIcon";

export const Anchor: Component<Blocks.Anchor> = ({
  Title,
  Slug,
  Level,
  Icon,
}) => {
  const Host = `h${Level}` as ElementType;

  return (
    <Host
      className={clsx(
        "font-medium flex items-center gap-2",
        Level === 1 && "text-3xl",
        Level === 2 && "text-2xl",
        Level === 3 && "text-xl",
        Level >= 4 && "text-lg"
      )}
      id={Slug}
    >
      {Icon ? <LazyIcon icon={Icon} /> : null}
      {Title}
    </Host>
  );
};
