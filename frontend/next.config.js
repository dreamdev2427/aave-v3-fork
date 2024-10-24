// eslint-disable-next-line
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const pageExtensions = ['page.tsx'];
if (process.env.NEXT_PUBLIC_ENABLE_GOVERNANCE === 'true') pageExtensions.push('governance.tsx');
if (process.env.NEXT_PUBLIC_ENABLE_STAKING === 'true') pageExtensions.push('staking.tsx');

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer({
  webpack(config, {isServer}) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: ['prefixIds'],
            },
          },
        },
        // {
        //   loader: 'file-loader',
        //   options: {
        //     publicPath: `/_next/static/media/`,
        //     outputPath: `${isServer ? '../' : ''}static/media/`,
        //     name: '[name].[hash:8].[ext]',
        //   },
        // }
      ],
    });
    config.experiments = { topLevelAwait: true };
    return config;
  },
  reactStrictMode: true,
  // assetPrefix: "./",
  trailingSlash: true,
  pageExtensions,
  images: {
    // unoptimized: true,
    disableStaticImages: true,
    domains: ['https://ik.imagekit.io/cykpetgtn'],
    loader: 'custom',
    loaderFile: './my/image/loader.js',
    path: '/', // Set your custom path 
  },
});
