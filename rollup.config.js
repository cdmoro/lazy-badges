import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
import { terser } from "rollup-plugin-terser"
import css from 'rollup-plugin-css-porter'

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
			raw: false,
			minified: 'lazy-badges.min.css',
		}),
		terser()
	]
};
