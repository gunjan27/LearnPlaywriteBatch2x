function checkJsBasicsReadinessGate(hasSetup, hasPractice, hasNotes) 
{
    if (
    typeof hasSetup !== "boolean" ||
    typeof hasPractice !== "boolean" ||
    typeof hasNotes !== "boolean"
  ) return "BLOCKED";
  return hasSetup && hasPractice && hasNotes ? "READY" : "BLOCKED";
}