export const Funcs: any = {};

const JUNKS = ['nan', 'null', 'none', ''];

Funcs.clean_junk = function(value) {
    if (value === null || value === undefined) {
        return null;
    }

    // Check for NaN
    if (typeof value === 'number' && Number.isNaN(value)) {
        return null;
    }

    // Don't treat 0, false, or empty arrays/objects as junk
    if (value === 0 || value === false) {
        return value;
    }

    // Check for empty collections (arrays or objects)
    if (
        (Array.isArray(value) && value.length === 0) ||
        (typeof value === 'object' && value !== null && Object.keys(value).length === 0)
    ) {
        return null;
    }

    // String-based junk checking
    const strippedValue = String(value).trim().toLowerCase();
    if (JUNKS.includes(strippedValue)) {
        return null;
    }

    return value;
}