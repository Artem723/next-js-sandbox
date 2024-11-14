const alphabet = 'ABCDEFGabcdefg!@#$%^&*()_-+123456789';
export function generateStr(len) {
    return Array.from({length: len}, (el, i) => alphabet[Math.floor(Math.random() * alphabet.length)]).join('');  
}