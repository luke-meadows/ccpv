const withVideos = require('next-videos');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = withVideos(nextConfig);
