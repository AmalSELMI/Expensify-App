const add = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add (2, 3);
    expect(result).toBe(5);
})

test('greetings', () => {
    const result = generateGreeting('Amal');
    expect(result).toBe('Hello Amal');
})

test('greetings', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous');
})