import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import { terser } from "rollup-plugin-terser"
// import css from 'rollup-plugin-css-porter'
import css from 'rollup-plugin-merge-and-inject-css'

// delete old typings to avoid issues
require('fs').unlink('dist/index.d.ts', (err) => {});

export default {
	input: 'src/index.ts',
	output: [
		{
			file: pkg.main,
			format: 'cjs'
		},
		{
			file: pkg.module,
			format: 'es'
		},
		{
			file: pkg.browser,
			format: 'umd',
			name: 'lb'
		}
	],
	external: [
		...Object.keys(pkg.dependencies || {})
	],
	plugins: [
		typescript({
			typescript: require('typescript'),
		}),
		css({
			id: 'lb'
		}),
		// css({
		// 	raw: false,
		// 	minified: 'lazy-badges.min.css',
		// }),
		terser()
	]
};
