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
    // Split the string into an array of words
    const words: string[] = name.split('-');

    // Capitalize the first letter of each word and join them back together
    const capitalizedString: string = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return `https://img.shields.io/badge/` + capitalizedString + `-` + color.substring(1);
}