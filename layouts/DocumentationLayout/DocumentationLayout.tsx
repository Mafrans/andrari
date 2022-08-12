import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Component } from "../../types/components";
import { LayoutProps } from "../types";

export const DocumentationLayout: Component<LayoutProps> = ({
  children,
  page,
}) => {
  const anchors = page.attributes.Blocks.filter(
    (b) => b.__component === "blocks.anchor"
  ) as Blocks.Anchor[];

  return (
    <div className="min-h-screen grid grid-cols-[max-content_1fr]">
      <Sidebar
        title="Andrari Regelbok"
        links={anchors.map((a) => ({
          title: a.Title,
          href: `#${a.Slug}`,
          icon: a.Icon,
        }))}
      />

      <main>{children}</main>
    </div>
  );
};
