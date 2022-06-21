module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'airbnb-base',
		// "airbnb-typescript"
	],
	plugins: ['svelte3', '@typescript-eslint', 'align-import', ],
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
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		},
	},
	rules: {
		quotes: ['error', 'single'],
		camelcase: 'warn',
		'linebreak-style': ['error', 'windows'],
		indent: [2, 'tab'],
		'lines-between-class-members': ['off', 'never'],
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'key-spacing': [
			'error',
			{
				align: {
					beforeColon: true,
					afterColon: true,
					on: 'colon',
				},
			},
		],
    'no-multi-spaces': ['off', {
      exceptions: {
        VariableDeclarator: true,
        Property: true,
        "ImportDeclaration": true,
      },
    }],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				js: 'never',
				jsx: 'never',
				ts: 'never',
				tsx: 'never',
			},
		],
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['off'],
    'no-underscore-dangle': ["error", { "allow": ["__place"] }],
    'align-import/align-import': ['error'],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
		'indent': 'off',
		'no-tabs': 'off',
		// 'import/no-extraneous-dependencies': 'off',
		'import/no-unresolved': 'off',
	},
};
