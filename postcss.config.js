
module.exports = () => ({
    plugins: [
        require('postcss-import'),
        require('postcss-custom-media'),
        require('postcss-preset-env')({ stage: 0 }),
        require('postcss-nested'),
        // require('postcss-autoreset'),
        require('postcss-custom-selectors'),
    ],
});
