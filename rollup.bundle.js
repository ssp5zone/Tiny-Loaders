import amd from 'rollup-plugin-amd';

export default {
    input: 'public/app/main-almond.js',
    output: {
        file: 'dist/rollup/bundle.js',
        format: 'amd'
    },
    plugins: [
        amd()
    ]
};
