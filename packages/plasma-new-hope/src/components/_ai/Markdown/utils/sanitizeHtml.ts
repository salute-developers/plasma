import createDOMPurify from 'dompurify';

let purifier: ReturnType<typeof createDOMPurify> | undefined;

const escapeHtml = (html: string) =>
    html
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');

const getPurifier = () => {
    if (typeof window === 'undefined') {
        return undefined;
    }

    if (!purifier) {
        purifier = createDOMPurify(window);
    }

    return purifier;
};

export const sanitizeHtml = (html: string) => {
    const domPurify = getPurifier();

    if (!domPurify) {
        return escapeHtml(html);
    }

    return domPurify.sanitize(html);
};
