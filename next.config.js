const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: '',
  assetPrefix: isProd ? '/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;