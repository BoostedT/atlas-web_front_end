function countPrimeNumbers() {
  return 25;
}

const start = performance.now();
countPrimeNumbers();
const end = performance.now();

console.log(`Execution time of printing countPrimeNumbers was ${end - start} milliseconds.`);
