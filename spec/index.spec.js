const { sum ,stringReverse,removeDuplicate} = require("../index");

// suite
describe("Here I Test Sum Funtion", () => {
  // Testcases
  it("Test that sum return sum of 2 numbers", () => {
    // expect(sum()).matcher(expected value)
    // expect(2+3).toBe(5)
    expect(sum(1, 2)).toBe(3);
    // expect(sum(3,4)).not.toBeGreaterThan(10)
  });
  it("Test that sum return of type number", () => {
    // expect(typeof sum(1,2)).toBe('number')
    expect(sum(1, 2)).toEqual(jasmine.any(Number));
  });
  it("Test that sum take one parameter", () => {
    expect(sum(3)).toBeNaN()
  });
  it("Test that sum throw error if parameters are strings", () => {
    expect(() => {sum("amira", "ali")}).toThrow();
  });
  
});


describe('Here I Test stringReverse function ',()=>{
    it('Test that if passed string should return it reversed',()=>{
        expect(stringReverse('ali')).toBe('ila')
    })
    it('Test that function return of type string',()=>{
        expect(stringReverse('ali')).toEqual(jasmine.any(String))
    })
})
describe('Here I Test removeDuplicate function ',()=>{
    it('Test that function removes array duplicates',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toEqual([1,2,3,4])
    })
    it('Test that function return of type array',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toEqual(jasmine.any(Array))
    })
    it('Test that function only remove duplicates',()=>{
        expect(removeDuplicate([1,1,2,3,4,4])).toContain(4)
    })
})

