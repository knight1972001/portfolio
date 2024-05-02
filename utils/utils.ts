export const checkValidEmail = (email: string): boolean => { // Regular expression pattern for validating email addresses
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regex pattern
    return emailRegex.test(email);
};