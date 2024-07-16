module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    require.resolve('@docusaurus/core/lib/babel/preset')
  ],
  plugins: [
    '@babel/plugin-syntax-jsx', // Add this line to enable JSX syntax parsing
  ],
};
