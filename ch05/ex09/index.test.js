import { parseJSONString } from "./index.js";

describe("parseJSONString", () => {
  it("should parse a valid JSON string", () => {
    const input = '{"animal": "dog", "name": "Nana"}';
    const result = parseJSONString(input);
    expect(result.success).toBe(true);
    expect(result.data).toEqual({ "animal": "dog", "name": "Nana"});
  });

  it("should return an error for an invalid JSON string", () => {
    const input = '{"animal": "cat", "name": }';
    const result = parseJSONString(input);
    expect(result.success).toBe(false);
    expect(result.error).toEqual("Unexpected token '}', ...\", \"name\": }\" is not valid JSON");
  });

  it("should handle empty strings", () => {
    const input = '';
    const result = parseJSONString(input);
    expect(result.success).toBe(false);
    expect(result.error).toEqual("Unexpected end of JSON input");
  });
});