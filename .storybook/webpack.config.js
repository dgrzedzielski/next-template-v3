const path = require('path');
const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');

module.exports = async ({ config }) => {
    const tsPaths = new TsconfigPathsPlugin({
        configFile: './tsconfig.json',
    });

    config.resolve.plugins
        ? config.resolve.plugins.push(tsPaths)
        : (config.resolve.plugins = [tsPaths]);

    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    return config;
};
