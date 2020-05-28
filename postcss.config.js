
module.exports = () => ({
    plugins: [
        require('postcss-import'),
        require('tailwindcss')('./tailwind.config.js'),
        require('postcss-custom-media'),
        require('postcss-preset-env')({ stage: 0 }),
        require('postcss-nested'),
        require('postcss-custom-selectors'),
    ],
});
