// Генерируется ../cli.ts при каждом прогоне — вручную не рекомендуется изменять.
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
        '@salutejs/plasma-b2c',
        '@salutejs/plasma-core',
        '@salutejs/plasma-hope',
        '@salutejs/plasma-new-hope',
        '@salutejs/plasma-themes',
        '@salutejs/plasma-tokens-b2c',
        '@salutejs/plasma-tokens-web',
        '@salutejs/plasma-typo',
    ],
    // Проверяем именно сборку пакета, а не линт/типизацию этого приложения: eslint иначе
    // подхватывает корневой .eslintrc монорепы, а typescript — ловит устаревшие типы в
    // скопированных примерах из доки.
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
