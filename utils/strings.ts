export function slugify(string: string) {
  return string.toLowerCase().replace(/[^a-z0-9]/, "-");
}
