const path = require('path');
const tailwindConfig = require('../tailwind.config.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './src/**/*.html',
        './src/**/*.vue',
        './src/**/*.jsx',
        // etc.
    ],

    // This is the function used to extract class names from your templates
    defaultExtractor: content => {
        // Capture as liberally as possible, including things like `h-(screen-1.5)`
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

        // Capture classes within other delimiters like .block(class="w-1/2") in Pug
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

        return broadMatches.concat(innerMatches)
    }
})

module.exports = {
    webpackFinal: async (config, {configType}) => {
        const entry = config.entry;
        delete config.entry;
        config.entry = {};
        config.entry.index = entry;
        config.output.filename = '[name].js';
        // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
        // You can change the configuration based on that.
        // 'PRODUCTION' is used when building the static version of storybook.

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', {
                loader: "css-loader",
                options: {
                    importLoaders: 1,
                    modules: false,
                },
            }, {
                loader: "postcss-loader",
                options: {
                    postcssOptions: (loader) => {
                        return {
                            ident: 'postcss',
                            plugins: [
                                ['postcss-import', {root: loader.resourcePath}],
                                'postcss-preset-env',
                                ['tailwindcss', {config: './tailwind.config.js'}],
                                ['cssnano', {
                                    preset: 'default',
                                }],
                                ['postcss-preset-env', {
                                    stage: 1
                                }]
                                // ...process.env.NODE_ENV === 'production'
                                //   ? [purgecss]
                                //   : []
                            ]
                        }
                    }
                }
            },
            'sass-loader'
            ],
            // include: path.resolve(__dirname, '../'),
        });
        // Make whatever fine-grained changes you need
        config.module.rules.push({
            test: /\.css$/,
            use: process.env.NODE_ENV === 'prod' ? [
                {
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: false,
                    },
                },
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: (loader) => {
                            return {
                                ident: 'postcss',
                                plugins: [
                                    ['postcss-import', {root: loader.resourcePath}],
                                    'postcss-preset-env',
                                    ['tailwindcss', {config: './tailwind.config.js'}],
                                    ['cssnano', {
                                        preset: 'default',
                                    }],
                                    ['postcss-preset-env', {
                                        stage: 1
                                    }]
                                    // ...process.env.NODE_ENV === 'production'
                                    //   ? [purgecss]
                                    //   : []
                                ]
                            }
                        }
                    }
                },
            ] : [
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: (loader) => {
                            return {
                                ident: 'postcss',
                                plugins: [
                                    ['postcss-import', {root: loader.resourcePath}],
                                    'postcss-preset-env',
                                    ['tailwindcss', {config: './tailwind.config.js'}],
                                    ['cssnano', {
                                        preset: 'default',
                                    }],
                                    ['postcss-preset-env', {
                                        stage: 1
                                    }]
                                    // ...process.env.NODE_ENV === 'production'
                                    //   ? [purgecss]
                                    //   : []
                                ]
                            }
                        }
                    }
                },
            ],
            include: path.resolve(__dirname, '../'),
        });
        config.module.rules.push({
            test: /\.postcss$/,
            use: process.env.NODE_ENV === 'prod' ? [
                'style-loader',
                {
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        modules: false,
                    },
                },
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: (loader) => {
                            return {
                                ident: 'postcss',
                                plugins: [
                                    ['postcss-import', {root: loader.resourcePath}],
                                    'postcss-preset-env',
                                    ['tailwindcss', {config: './tailwind.config.js'}],
                                    ['cssnano', {
                                        preset: 'default',
                                    }],
                                    ['postcss-preset-env', {
                                        stage: 1
                                    }]
                                    // ...process.env.NODE_ENV === 'production'
                                    //   ? [purgecss]
                                    //   : []
                                ]
                            }
                        }
                    }
                },
            ] : [
                'style-loader',
                'css-loader',
                {
                    loader: "postcss-loader",
                    options: {
                        postcssOptions: (loader) => {
                            return {
                                ident: 'postcss',
                                plugins: [
                                    ['postcss-import', {root: loader.resourcePath}],
                                    'postcss-preset-env',
                                    ['tailwindcss', {config: './tailwind.config.js'}],
                                    ['cssnano', {
                                        preset: 'default',
                                    }],
                                    ['postcss-preset-env', {
                                        stage: 1
                                    }]
                                    // ...process.env.NODE_ENV === 'production'
                                    //   ? [purgecss]
                                    //   : []
                                ]
                            }
                        }
                    }
                },
            ],
            include: path.resolve(__dirname, '../'),
        });

        config.node = {
            fs: 'empty'
        };
        process.env.NODE_ENV === 'prod' && config.plugins.push(
            new MiniCssExtractPlugin({
                filename: '[name].css'
            })
        );
        // Return the altered config
        return config;
    },
    stories: ['../src/*.stories.(js|mdx)'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                vueDocgenOptions: {
                    alias: {
                        '@': path.resolve(__dirname, '../src'),
                    },
                },
            },
        },
        '@storybook/addon-storysource',
        '@storybook/addon-actions/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        '@storybook/addon-links'
    ],
};
