export function escapeStringIfElse(input) {
    let escapedString = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      if (char === "\0") {
        escapedString += "\\0";
      } else if (char === "\b") {
        escapedString += "\\b";
      } else if (char === "\t") {
        escapedString += "\\t";
      } else if (char === "\n") {
        escapedString += "\\n";
      } else if (char === "\v") {
        escapedString += "\\v";
      } else if (char === "\r") {
        escapedString += "\\r";
      } else if (char === "\"") {
        escapedString += "\\\"";
      } else if (char === "'") {
        escapedString += "\\'";
      } else if (char === "\\") {
        escapedString += "\\\\";
      } else {
        escapedString += char;
      }
    }
    return escapedString;
  }

export function escapeStringSwitch(input) {
    let escapedString = "";
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      switch (char) {
        case "\0":
          escapedString += "\\0";
          break;
        case "\b":
          escapedString += "\\b";
          break;
        case "\t":
          escapedString += "\\t";
          break;
        case "\n":
          escapedString += "\\n";
          break;
        case "\v":
          escapedString += "\\v";
          break;
        case "\r":
          escapedString += "\\r";
          break;
        case "\"":
          escapedString += "\\\"";
          break;
        case "'":
          escapedString += "\\'";
          break;
        case "\\":
          escapedString += "\\\\";
          break;
        default:
          escapedString += char;
      }
    }
    return escapedString;
  }