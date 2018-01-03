/*Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.*/
/*var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'*/
//Pass The test
/*describe("getFullName", function() {
  it("should return a string", function() {
    expect(typeof(getFullName("Rebecca", "Solnit"))).toBe("string");
  });
  it("should return a full name using firstName and lastName", function() {
    expect(getFullName("Rebecca", "Solnit")).toBe("Rebecca Solnit");
  });
});*/

function getFullName(firstName, lastName){
	return firstName + " "+lastName;
}