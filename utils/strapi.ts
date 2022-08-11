import { stringify } from "qs";

type NestedRecord<T> = { [key: string]: T | NestedRecord<T> };

export type APIResponse<T> = {
  data: T;
  meta: Strapi.Pagination;
};

export async function apiQuery<T>(
  route: string,
  query: NestedRecord<unknown> = {},
  options?: RequestInit
) {
  const url = new URL(route, process.env.NEXT_PUBLIC_API_URL);
  url.search = stringify(query);

  console.log(url.href);
  const response = await fetch(url.href, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return (await response.json()) as APIResponse<T>;
}

export const getCollection = async <T>(
  name: string,
  query?: NestedRecord<unknown>,
  options?: RequestInit
) => await apiQuery<Strapi.Collection<T>>(`/api/${name}`, query, options);

export const getSingle = async <T>(
  name: string,
  id?: number,
  query?: NestedRecord<unknown>,
  options?: RequestInit
) =>
  await apiQuery<Strapi.Single<T>>(
    id ? `/api/${name}/${id}` : `/api/${name}`,
    query,
    options
  );
