/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    // basePath: '/src/app'
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'jlbhi27zuk7q82e7.public.blob.vercel-storage.com',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
