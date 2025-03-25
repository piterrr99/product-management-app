/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: 'custom',
        loaderFile: './image_loader.js',
      },
};

export default nextConfig;
