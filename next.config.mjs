/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SERVICE_ID: process.env.SERVICE_ID,
        TEMPLATE_ID: process.env.TEMPLATE_ID,
        PUBLIC_KEY_EMAILJS: process.env.PUBLIC_KEY_EMAILJS,
    },
};

export default nextConfig;
