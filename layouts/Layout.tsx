import { Component } from "../types/components";
import { DocumentationLayout } from "./DocumentationLayout/DocumentationLayout";
import { LayoutProps } from "./types";

const layouts = {
  documentation: DocumentationLayout,
};

export const Layout: Component<LayoutProps> = ({ children, ...props }) => {
  const PageLayout = layouts[props.type as keyof typeof layouts];
  return <PageLayout {...props}>{children}</PageLayout>;
};
