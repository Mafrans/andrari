import clsx from "clsx";
import Link from "next/link";
import { Component } from "../../types/components";
import { SidebarLink } from "./SidebarLink";
import { SidebarProps } from "./types";

export const Sidebar: Component<SidebarProps> = ({
  className,
  title,
  links,
}) => {
  return (
    <aside
      className={clsx(
        "h-full bg-white border-r border-slate-200 min-w-[300px]",
        className
      )}
    >
      <Link href="/">
        <a className="flex p-6">{title}</a>
      </Link>

      <div className="p-4 space-y-1">
        {links.map((link, i) => (
          <SidebarLink key={i} {...link} />
        ))}
      </div>
    </aside>
  );
};
