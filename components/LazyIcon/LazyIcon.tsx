import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { IconType } from "react-icons";
import { LazyIconProps } from "./types";

export const LazyIcon = ({ icon, ...props }: LazyIconProps) => {
  const Icon = dynamic<IconType>(() =>
    import("react-icons/cg").then(
      (mod) => mod[`Cg${icon}` as keyof typeof mod] as ComponentType<IconType>
    )
  ) as IconType;

  return <Icon {...props} />;
};
