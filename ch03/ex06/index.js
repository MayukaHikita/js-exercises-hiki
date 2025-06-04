export function slice(str, indexStart, indexEnd) {
    if (indexStart === undefined || Number.isNaN(indexStart)) {
        indexStart = 0;
    }
    if (indexEnd === undefined || indexEnd === Infinity || indexEnd > str.length) {
        indexEnd = str.length;
    }
    if (Number.isNaN(indexEnd)){
        indexEnd = 0;
    }
    if (indexStart > str.length) {
        indexStart = str.length;
    }
    indexEnd = Math.floor(indexEnd);

    if (indexStart < 0) {
        if (indexStart*(-1)> str.length) {
            indexStart = 0;
        }else{
        indexStart = str.length + indexStart;
        }
    }
    if(indexEnd < 0) {
        if (indexEnd*(-1)> str.length) {
            indexEnd = 0;
        }else{
        indexEnd = str.length + indexEnd;
        }
    }

    if((indexStart != undefined &&indexStart === indexEnd) || (indexStart*indexEnd >=0 && indexStart > indexEnd)) {
        return "";
    }

    var char = str.charAt(indexStart);
    for (var i = indexStart; i < indexEnd-1; i++) {
        char += str.charAt(i + 1);
    }
    return char;
  }
  