export type SidebarProps = {
  title: string;
  links: SidebarLinkProps[];
};

export type SidebarLinkProps = {
  title: string;
  href: string;
  icon: string;
  active?: boolean;
};
