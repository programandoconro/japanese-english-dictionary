export default function removeQuotes(s: string) {
  if (typeof s !== "string") {
    return;
  }
  return s.replace(/["']/g, "");
}
