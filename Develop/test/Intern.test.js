const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testSchool= "UTSA";
  const obj = new Intern("Sam", 1, "Sam@gmail.com", testSchool);
  expect(obj.school).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
  const testRole = "Intern";
  const obj = new Intern("Sam", 1, "Sam@gmail.com", "UTSA");
  expect(obj.getRole()).toBe(testRole);
});

test("Can get school via getSchool()", () => {
  const testSchool = "UTSA";
  const obj = new Intern("Sam", 1, "Sam@gmail.com", testSchool);
  expect(obj.getSchool()).toBe(testSchool);
});