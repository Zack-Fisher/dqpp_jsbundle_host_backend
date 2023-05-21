const path = require('path');

module.exports = {
    target: 'node',
    entry: {
        hoster: './index.js',
        global_module: './src/global_module.ts',
    },
    // do not optimize out all the code in the hanging modules, since we're not necessarily using them in THIS project.
    // these bundles in /dist are just for hosting.
    optimization: {
        usedExports: false
    },
    output: {
        // why can't we do the same callback on the path param? dumb.
        filename: ({ chunk: { name } }) => {
            if (name === 'hoster') {
                return '[name].bundle.js';
            } else {
                return 'dist/[name].bundle.js';
            }
        },
        path: path.resolve(__dirname),
    },
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
