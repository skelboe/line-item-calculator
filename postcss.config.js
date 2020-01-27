// Next.js 9.2 includes css built in, and we now have to specify our imports
// like strings.
const plugins = {
    'postcss-import': {},
    tailwindcss: {},
    'postcss-preset-env': { stage: 2 },
}

// When building for production we will purge any unsued styles
if (process.env.NODE_ENV === 'production') {
    plugins['@fullhuman/postcss-purgecss'] = {
        content: ['./pages/**/*.jsx', './components/**/*.jsx'],
        whitelist: ['body', 'html'],
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
    }
}

module.exports = {
    plugins: plugins,
}
