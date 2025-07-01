function notStrict() {
    undeclaredVariable = 42;
    console.log(undeclaredVariable); //42
  }

notStrict();