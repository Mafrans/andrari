declare namespace Collections {
  type Post = {
    Title: string;
    Slug: string;
    Excerpt: string;
    Blocks: Strapi.Component<unknown>[];
  };

  type Navbar = {
    Title: string;
    Items: (NavigationLink | Submenu)[];
  };

  type NavigationLink = Strapi.Component<{
    Title: string;
    URL: string;
  }>;

  type Submenu = Strapi.Component<{
    Title: string;
    Links: NavigationLink[];
  }>;
}
