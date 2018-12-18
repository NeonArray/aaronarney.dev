
export function assign(...classes) {
    return [...classes].join(' ');
}

export function capitalizeWords(str) {
    return str.replace(/\b\w/g, letter => letter.toUpperCase());
}
