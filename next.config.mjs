/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.glsl$/,
            type: 'asset/source', // Use asset/source to load GLSL files
        });
        return config;
    },
};

export default nextConfig;
