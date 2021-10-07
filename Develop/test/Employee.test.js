
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should be an object when called with the new keyword", () => {
            const obj = new Employee();

            expect(typeof(obj)).toBe("object");
        })

    it("should set name via constructor arguements", () => {
        const name = "Sam";
        const obj = new Employee(name);

        expect(obj.name).toBe(name);
    })

    it("should set ID via constructor arguements", () => {
        const id = 1;
        const obj = new Employee("Sam", id);
        expect(obj.id).toBe(id);
    })

    it("should set email via constructor arguement", () => {
        const email = "test@gmail.com";
        const obj = new Employee("Sam", 1, email);
        expect(obj.email).toBe(email);
    })
    })
})

