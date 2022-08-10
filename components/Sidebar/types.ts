export type SidebarProps = {
  title: string;
  links: SidebarLinkProps[];
};

export type SidebarLinkProps = {
  title: string;
  href: string;
  active?: boolean;
};
