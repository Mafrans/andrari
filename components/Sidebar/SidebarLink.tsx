import clsx from "clsx";
import Link from "next/link";
import { Component } from "../../types/components";
import { LazyIcon } from "../LazyIcon/LazyIcon";
import { SidebarLinkProps } from "./types";

export const SidebarLink: Component<SidebarLinkProps> = ({
  href,
  title,
  icon,
  active,
}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          "transition items-center gap-2 duration-75 px-2 py-2 flex rounded hover:bg-slate-100",
          active && "!bg-slate-200"
        )}
      >
        <LazyIcon icon={icon} />
        {title}
      </a>
    </Link>
  );
};
