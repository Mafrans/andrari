declare namespace Strapi {
  export type Component<T> = Snowflake<T & { __component: string }>;

  export type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };

  export type Snowflake<T> = T & {
    id: number;
  };

  export type Single<T> = Snowflake<{
    attributes: T;
    meta: Record<string, never>;
  }>;

  export type Collection<T> = Single<T>[];
}
