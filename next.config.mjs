/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // basePath: '/src/app'
    mode: 'jit',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jlbhi27zuk7q82e7.public.blob.vercel-storage.com',
                // https://images.unsplash.com
                // port: '',
                // pathname: '/account123/**',
            },
            {
                protocol: 'https',
                hostname: 'https://images.unsplash.com',
                // https://images.unsplash.com
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
