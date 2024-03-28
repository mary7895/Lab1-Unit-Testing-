const {capitalizeTextFirstChar  , createArray  , random} = require("../lab1");


//Problem 1
// test cases:
/* 
1-test that the function takes a string it will return type to be a string
2-test that the function takes a string and return it after capitalize it
3-test if the function takes number it will throw type error says parameter should be string
 */

describe("Here I Test capitalizeTextFirstChar Funtion", () => {
    it("test that the function takes a string it will return type to be a string", () => {
        expect(capitalizeTextFirstChar('momen')).toEqual(jasmine.any(String)) 
    });
    
    it("test that the function takes a string and return it after capitalize it", () => {
        expect(capitalizeTextFirstChar('momen')).toBe('Momen') 
    });

    it("test if the function takes number it will throw type error says parameter should be string", () => {
        expect(() => capitalizeTextFirstChar(12)).toThrowError("parameters should be string");
    });

})




//Problem2
 /*
    1-test that the return value of type array
    2-test if we pass 2 it will return array of length 2 and test it includes 1
    3-test if we pass 3 it will return array of length 3 and test it doesn't include 3
*/

describe("Here I Test createArray function ", () => {
    it("test that the return value of type array", () => {
        expect(createArray(3)).toEqual(jasmine.any(Array))
    })

    it("test if we pass 2 it will return array of length 2 and test it includes 1", () => {
        expect(createArray(2).length).toBe(2);
        expect(createArray(2)).toContain(1);
    })

    it("test if we pass 3 it will return array of length 3 and test it doesn't include 3", () => {
        expect(createArray(3).length).toBe(3);
        expect(createArray(2)).not.toContain(3);
    })
})


//problem3

// test cases:
/* 
    1-test that the return value is a number
    2-test if we pass 5,7 it will return a number >= 5 and <= 7
    3-test if we pass one parameter it will return NaN
*/

describe("Here I Test random function ", () => {
    it("test that the return value is a number", () => {
        expect(random(2,9)).toEqual(jasmine.any(Number))
    })

    it("test if we pass 5,7 it will return a number >= 5 and <= 7", () => {
        expect(random(5,7)).toBeGreaterThanOrEqual(5);
        expect(random(5,7)).toBeLessThanOrEqual(7);
    })

    it("test if we pass one parameter it will return NaN", () => {
        expect(random()).toBeNaN();
    })
})
