export default [
	// ES module version, for modern browsers
	{
		input: ['src/main-a.js', 'src/main-b.js'],
		output: {
			dir: 'public/module',
			format: 'es',
			sourcemap: true
		},
		experimentalCodeSplitting: true,
		experimentalDynamicImport: true
	},

	// SystemJS version, for older browsers
	{
		input: ['src/main-a.js', 'src/main-b.js'],
		output: {
			dir: 'public/nomodule',
			format: 'system',
			sourcemap: true
		},
		experimentalCodeSplitting: true,
		experimentalDynamicImport: true
	}
];
