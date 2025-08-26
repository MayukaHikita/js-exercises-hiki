function f(input) {
    const f = new Function(`return "Hello, " + ""; alert('Hacked!'); //`);
    console.log(f());
  }
  