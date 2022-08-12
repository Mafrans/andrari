import clsx from "clsx";
import { ElementType } from "react";
import { Component } from "../../../types/components";
import * as icons from "react-icons/cg";

export const Anchor: Component<Blocks.Anchor> = ({
  Title,
  Slug,
  Level,
  Icon,
}) => {
  const Host = `h${Level}` as ElementType;
  const IconElement = icons[Icon as keyof typeof icons];

  return (
    <Host
      className={clsx(
        "font-medium",
        Level === 1 && "text-2xl",
        Level === 2 && "text-xl",
        Level >= 3 && "text-lg"
      )}
      id={Slug}
    >
      {Icon ? <IconElement /> : null}
      {Title}
    </Host>
  );
};
