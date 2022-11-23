const {sum, subtract, multiply, divide, remainder} = require('./math');
function expect(calculatedValue) {
    return {
        toBe(expectedValue) {
            if(calculatedValue !== expectedValue) {
                throw new Error(`${calculatedValue} is not equal to ${expectedValue}`);
            }
        }
    }
}

function test(title, callback) {
    try {
        callback();
        console.log('Success: ' + title);
    } catch(err) {
        console.log('Error ' + title);
        console.log(err);
    }
}

test('Sum Test', () => {
    const expectedVal = 10;
    const resultVal = sum(6,4);
    expect(resultVal).toBe(expectedVal);
});
test('Difference Test', ()=> {
    const expectedVal = 11;
    const resultVal = subtract(16,4);
    expect(resultVal).toBe(expectedVal);
});