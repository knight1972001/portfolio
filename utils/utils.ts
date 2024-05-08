export const checkValidEmail = (email: string): boolean => { // Regular expression pattern for validating email addresses
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Test the email against the regex pattern
    return emailRegex.test(email);
};

export const countWords = (content: string): number => {
    const wordsArray = content.split(/\s+/).filter(word => word.trim() !== '');

    return wordsArray.length;
}

export const convertBadgeUrl = (name: string, color: string): string => {
    return `https://img.shields.io/badge/` + name + `-` + color.substring(1);
}