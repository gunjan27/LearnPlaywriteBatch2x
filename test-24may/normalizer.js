function normalizeJsBasicsLabel(label) {
   const normalized = String(label)
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return normalized
    ? `js-basic-${normalized}`
    : "js-basic";
}