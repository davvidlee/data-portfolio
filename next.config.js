const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/data-portfolio' : '',
  assetPrefix: isProd ? '/data-portfolio/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;