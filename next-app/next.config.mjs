/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        viewTransition: true,
    },
    // Fix EMFILE: too many open files by using polling instead of inotify
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000,
                aggregateTimeout: 300,
            };
        }
        return config;
    },
};

export default nextConfig;
