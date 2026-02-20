/** @type {import('next').NextConfig} */
const nextConfig = {
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
