import clsx from "clsx";
import Link from "next/link";
import { Component } from "../../types/components";
import { SidebarLinkProps } from "./types";

export const SidebarLink: Component<SidebarLinkProps> = ({
  href,
  title,
  active,
}) => {
  return (
    <Link href={href}>
      <a
        className={clsx(
          "transition duration-75 px-2 py-2 flex rounded hover:bg-slate-100",
          active && "!bg-slate-200"
        )}
      >
        {title}
      </a>
    </Link>
  );
};
