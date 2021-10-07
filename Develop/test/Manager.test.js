const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
  const testNum = 100;
  const obj = new Manager("Sam", 1, "Sam@gmail.com", testNum);
  expect(obj.officeNumber).toBe(testNum);
});

test('getRole() should return "Manager"', () => {
  const testRole= "Manager";
  const obj = new Manager("Sam", 1, "Sam@gmail.com", 100);
  expect(obj.getRole()).toBe(testRole);
});

test("Can get office number via getOffice()", () => {
  const testNum = 100;
  const obj = new Manager("Sam", 1, "Sam@gmail.com", testNum);
  expect(obj.getOfficeNumber()).toBe(testNum);
});