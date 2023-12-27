// tests.js
const { isValidEmail } = require('./script');

test('Valid email returns true', () => {
    const validEmail = 'test@example.com';
    expect(isValidEmail(validEmail)).toBe(true);
});

test('Invalid email returns false', () => {
    const invalidEmail = 'invalid-email';
    expect(isValidEmail(invalidEmail)).toBe(false);
});

