function countPrimeNumbers() {
  return 25;
}

const start = performance.now();
let i = 0;
while (i < 100) {
  countPrimeNumbers();
  i++;
}

const end = performance.now();

console.log(`Execution time of calculating prime numbers 100 times was ${end - start} milliseconds.`);
