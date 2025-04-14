/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  output: 'export',
  basePath: isProd ? '/data-portfolio' : '',
  assetPrefix: isProd ? '/data-portfolio/' : '',
}