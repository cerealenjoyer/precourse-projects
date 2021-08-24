test ("Adds numbers correctly", () => {
    equal(calculate(1, "+", 2), 3)
    equal(calculate(1, '+', -12), -11)
})
test ("Multiplies numbers correctly", () => {
    equal(calculate(1, "*", 4), 4)
    equal(calculate(12.4, '*', 0), 0)
})
test ("Subtracts numbers correctly", () => {
    equal(calculate(3, "-", 2), 1)
    equal(calculate(-4, '-', -2), -2)
})

test ("Divides numbers correctly", () => {
    equal(calculate(16, "/", 4), 4)
    equal(calculate(40, '/', 0), Infinity)
})

test ("can handle strings", ()=> {
    equal(calculate('1', '+', 2), 3)
    equal(calculate('10', '-', '4'), 6)
})

test('Checks the actual form works', () =>{
    const aInput = document.querySelector("input[name='a']");
    const signInput = document.querySelector("select");
    const bInput = document.querySelector("input[name='b']");
    aInput.value = '3';
    signInput.value = '+';
    bInput.value = '3';
    document.querySelector("button[type='submit']").click()
    
    const answer = document.querySelector('#result')
    equal(answer.textContent, '6');
    answer.textContent = ''}
    )