function createUniqueJsBasicsTags(tags) {
  const result = new Set();
  tags.forEach(tag => {
    const normalizedTag = tag.trim().toLowerCase();
    if (normalizedTag !== "") {
      result.add(normalizedTag);
    }
  });
  return [...result];
}
