const sum = (a,b) => a-b; // wantedly written to check errors
const subtract = (a,b) => a-b;
const sumAsync = (...args) => Promise.resolve(sum(...args));
const subtractAsync = (...args) => Promise.resolve(subtract(...args));

function expect(calculatedValue) {
    return {
        toBe(expectedValue) {
            if(calculatedValue !== expectedValue) {
                throw new Error(`${calculatedValue} is not equal to ${expectedValue}`);
            }
        }
    }
}

async function test(title, callback) {
    try {
        await callback();
        console.log('Success: ' + title);
    } catch(err) {
        console.log('Error ' + title);
        console.log(err);
    }
}

test('Sum Test', async () => {
    const expectedVal = 10;
    const resultVal = await sumAsync(6,4);
    expect(resultVal).toBe(expectedVal);
});
test('Difference Test', async ()=> {
    const expectedVal = 12;
    const resultVal = await subtractAsync(16,4);
    expect(resultVal).toBe(expectedVal);
});

// async testing works for both sync and async operartions.