/**
 * Loads an SVG file and returns its content as a string
 * @param {string} url - The URL of the SVG file
 * @returns {Promise<string>} The SVG content as a string
 */
export const loadSvg = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to load SVG: ${response.statusText}`);
        }
        const svgText = await response.text();
        return svgText;
    } catch (error) {
        console.error('Error loading SVG:', error);
        return '';
    }
}; 