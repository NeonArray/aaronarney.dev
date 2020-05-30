export function assign(...classes: Array<string>): string {
    return [...classes].join(" ");
}

export function capitalizeWords(str: string): string {
    return str.replace(/\b\w/g, (letter) => letter.toUpperCase());
}
