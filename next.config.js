const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.tsx',
    defaultShowCopyCode: true,
});

const isProduction = process.env.NODE_ENV === 'production';
const prefix = isProduction ? '/sobold-dev-standards' : '';

const nextConfig = {
    images: {
        unoptimized: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    trailingSlash: true,
    basePath: prefix,
    assetPrefix: prefix,
};

isProduction && (nextConfig.output = 'export');

module.exports = {
    ...withNextra(),
    ...nextConfig,
};
