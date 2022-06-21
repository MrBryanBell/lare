module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'airbnb-base',
	],
	plugins: ['svelte3', '@typescript-eslint'],
	ignorePatterns: ['*.cjs'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	settings: {
		'svelte3/typescript': () => require('typescript'),
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	rules: {
		quotes: ['error', 'single'],
		camelcase: 'warn',
    'linebreak-style': ['error', 'windows'],
		'indent': 'off',
		'no-tabs': 'off',
		'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
	},
};
