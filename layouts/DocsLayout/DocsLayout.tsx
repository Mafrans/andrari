import { Sidebar } from "../../components/Sidebar/Sidebar";
import { Component } from "../../types/components";

export const DocsLayout: Component<{}> = () => {
  return (
    <div className="min-h-screen grid grid-cols-[max-content_1fr]">
      <Sidebar
        title="Andrari Regelbok"
        links={[
          { href: "/", title: "Test" },
          { href: "/", title: "Test", active: true },
          { href: "/", title: "Test" },
        ]}
      />
    </div>
  );
};
