function calculateJsBasicsWeightedScore(passed, failed, skipped) {
  var totalTests = ((passed * 2) + (skipped * 0) )- failed * 1;
  if (totalTests === 0) {
    return 0; // Avoid division by zero
  }
  return totalTests;
}