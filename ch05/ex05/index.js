export function filterEvenNumber(obj) {
    const filteredObj = {};
    for (const key in obj) {
      if (obj[key] % 2 === 0) {
        filteredObj[key] = obj[key];
      }
    }
    return filteredObj;
  }