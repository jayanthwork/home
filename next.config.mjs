/** @type {import('next').NextConfig} */
const nextConfig = {
experimental: {
mdxRs: true
},
pageExtensions: ["tsx", "mdx", "md"],
images: {
unoptimized: true
}
};
export default nextConfig;
