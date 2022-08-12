declare namespace Blocks {
  export type Text = Strapi.Component<{
    Content: string;
  }>;

  export type Anchor = Strapi.Component<{
    Title: string;
    Slug: string;
    Level: number;
    Icon: string;
  }>;
}
