function isValidJsBasicsIdentifier(value) {
  
  if (typeof value !== "string") {
    return false;
  }

  const trimmed = value.trim();

 
  if (trimmed.length === 0) {
    return false;
  }

  
  const reservedWords = new Set([
    "let",
    "const",
    "var",
    "class",
    "function",
    "return",
  ]);

  if (reservedWords.has(trimmed)) {
    return false;
  }

 
  const identifierPattern = /^[A-Za-z_$][A-Za-z0-9_$]*$/;

  return identifierPattern.test(trimmed);
}

