export function lf2crlf(str) {
    // Replace LF with CRLF
    return str.replace(/(?<!\r)\n/g, '\r\n');   //正規表現のスタート（/）、直前が\rでない（(?<!\r)）、正規表現の終了（/）、文字列全体を対象に置換（g）
}

export function crlf2lf(str) {
    // Replace CRLF with LF
    return str.replace(/\r\n/g, '\n');
}