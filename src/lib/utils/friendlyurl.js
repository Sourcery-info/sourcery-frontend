/**
 * Converts a string to a friendly URL format.
 * @param {string} str - The input string to be converted.
 * @returns {string} - The converted string in a friendly URL format.
 */
export default function friendlyURL(str) {
    return str.toLowerCase().replace(/ /g, '-').replace(/[^a-z0-9-]/g, '');
}