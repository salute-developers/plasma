import fs from 'fs';
import path from 'path';

export const FIXTURE_DIR = path.join(__dirname, '..', 'fixture');
const PAGES_DIR = path.join(FIXTURE_DIR, 'pages');
const APP_FILE_NAME = '_app.jsx';

export function buildAppSource(importSpecifier: string, popupProviderName: string | null): string {
    if (!popupProviderName) {
        return `// Сгенерировано ../cli.ts при каждом прогоне — вручную не рекомендуется изменять.
export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
`;
    }

    return `// Сгенерировано ../cli.ts при каждом прогоне — вручную не рекомендуется изменять.
import { ${popupProviderName} } from '${importSpecifier}';

export default function App({ Component, pageProps }) {
    return (
        <${popupProviderName} UNSAFE_SSR_ENABLED>
            <Component {...pageProps} />
        </${popupProviderName}>
    );
}
`;
}

export interface GeneratedPage {
    fileName: string;
    source: string;
}

interface WriteFixtureFilesOptions {
    pages: GeneratedPage[];
    appSource: string;
    transpilePackages: string[];
}

export function writeFixtureFiles({ pages, appSource, transpilePackages }: WriteFixtureFilesOptions): void {
    const nextConfig = `// Генерируется ../cli.ts при каждом прогоне — вручную не рекомендуется изменять.
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ${JSON.stringify(transpilePackages)},
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
`;

    fs.writeFileSync(path.join(FIXTURE_DIR, 'next.config.js'), nextConfig);
    fs.mkdirSync(PAGES_DIR, { recursive: true });

    for (const entry of fs.readdirSync(PAGES_DIR)) {
        fs.unlinkSync(path.join(PAGES_DIR, entry));
    }

    fs.writeFileSync(path.join(PAGES_DIR, APP_FILE_NAME), appSource);

    for (const page of pages) {
        fs.writeFileSync(path.join(PAGES_DIR, page.fileName), page.source);
    }
}
