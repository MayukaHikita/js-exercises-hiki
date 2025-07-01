export function generateFibonacciWile() {
    const fibonacci = [1, 1];
    let count = 2;
    while (count < 10) {
      const next = fibonacci[count - 2] + fibonacci[count - 1];
      fibonacci.push(next);
      count++;
    }
    return fibonacci;
  }

export function generateFibonacciDoWhile() {
    const fibonacci = [1, 1];
    let count = 2;
    do {
      const next = fibonacci[count - 2] + fibonacci[count - 1];
      fibonacci.push(next);
      count++;
    } while (count < 10);
    return fibonacci;
  }

export function generateFibonacciFor() {
    const fibonacci = [1, 1];
    for (let i = 2; i < 10; i++) {
      const next = fibonacci[i - 1] + fibonacci[i - 2];
      fibonacci.push(next);
    }
    return fibonacci;
  }