const {
    returnTwo,
    greeting,
    add
} = require('./function.js')

test('should return', () => expect(returnTwo()).toBe(2))

test("should return greeting", ()=>{
    expect(greeting("Diamond")).toEqual('Hello, Diamond')
})

test("add them together", ()=>{
    expect(add(1,2)).toEqual(3)
})