const withLinaria = require('next-with-linaria');

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
};

module.exports = withLinaria(nextConfig);
