/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['continuityoman.com'],
    },
    trailingSlash: true,
}

module.exports = nextConfig 