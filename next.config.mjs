import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx', 
});

const nextConfig = {
  // Add other Next.js config options here
};


export default withNextra(nextConfig);
