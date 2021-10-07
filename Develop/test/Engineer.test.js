const Engineer = require("../lib/Engineer");

test("Should set Github account via constructor", () => {
  const githubUser = "GitHubUser";
  const obj = new Engineer("Sam", 1, "sam@gmail.com", githubUser);
  expect(obj.github).toBe(githubUser);
});

test("getRole() should return \"Engineer\"", () => {
  const testRole = "Engineer";
  const obj = new Engineer("Sam", 1, "sam@gmail.com", "githubUser");
  expect(obj.getRole()).toBe(testRole);
});

test("Can get GitHub username via getGithub()", () => {
  const testUser = "GitHubUser";
  const obj = new Engineer("Foo", 1, "sam@gmail.com.com", testUser);
  expect(obj.getGithub()).toBe(testUser);
});