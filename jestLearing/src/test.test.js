const { add } = require("./index.js");

test("分别输入10和20-没有100", () => {
  expect(add(10, 20)).toBe("没有100");
});


