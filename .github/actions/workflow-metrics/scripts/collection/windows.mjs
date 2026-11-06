export const dayMs = 86400000;

export function splitWindows(range) {
    const windows = [];
    let end = Date.parse(range.to);
    const start = Date.parse(range.from);
    while (end >= start) {
        const from = Math.max(start, end - 30 * dayMs + 1000);
        windows.push({ from: new Date(from).toISOString(), to: new Date(end).toISOString() });
        end = from - 1000;
    }
    return windows;
}
