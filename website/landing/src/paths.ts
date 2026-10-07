export const basePath = import.meta.env.BASE_URL;

export function publicPath(path: string) {
    return `${basePath}${path.replace(/^\//, '')}`;
}
