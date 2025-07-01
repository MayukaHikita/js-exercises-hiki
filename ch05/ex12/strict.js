'use strict';
function strict() {
  undeclaredVariable = 42; //ReferenceError: undeclaredVariable is not defined
  console.log(undeclaredVariable);
}
strict();