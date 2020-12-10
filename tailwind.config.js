const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
    future: {
        // removeDeprecatedGapUtilities: true,
        // purgeLayersByDefault: true,
    },
    purge: ['./public/**/*.html', './src/**/*.vue'],
    theme: {
        fontFamily: {
            sans: ['Inter', ...defaultTheme.fontFamily.sans],
        },
        colors: {
            primary: '#023e8a',
            secondary: '#ffc2cc',
            white: '#fff',
            black: '000',
            green: '#10B981',
        },
        fill: theme => ({
            white: theme('colors.white'),
        }),
    },
    variants: {},
    plugins: [],
}
