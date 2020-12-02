/**
 * @type {import('eslint').Linter.Config<import('eslint/rules/index').ESLintRules>}
 */
module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	extends: ['eslint:recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module'
	},
	rules: {
		'no-console': 'warn',
		indent: ['warn', 'tab'],
		'dot-notation': 'error',
		'no-empty-function': 'off',
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'arrow-body-style': 'error',
		'eol-last': ['error', 'always'],
		eqeqeq: ['error', 'always'],
		'brace-style': [
			'error',
			'1tbs',
			{
				allowSingleLine: true
			}
		],
		'linebreak-style': ['error', 'windows'],
		'constructor-super': 'error',
		curly: ['error', 'multi-or-nest'],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-var': 'error',
		'no-undef': 'error',
		'prefer-const': 'error',
		'guard-for-in': 'error',
		'id-denylist': ['warn', 'a', 'b', 'c', 'e', 'i', 'j', 'k', 'l'],
		'max-len': [
			'error',
			{
				code: 100
			}
		],
		'no-bitwise': 'error',
		'no-empty': 'error',
		'no-eval': 'error',
		'no-caller': 'error',
		'no-debugger': 'error',
		'no-fallthrough': 'warn',
		'no-new-wrappers': 'error',
		'no-shadow': [
			'error',
			{
				hoist: 'all'
			}
		],
		'no-labels': 'error',
		radix: 'error',
		'valid-typeof': 'error',
		'spaced-comment': [
			'error',
			'always',
			{
				markers: ['/']
			}
		],
		'arrow-parens': ['warn', 'as-needed'],
		'arrow-spacing': [
			'error',
			{
				before: true,
				after: true
			}
		],
		'prefer-template': 'warn'
	}
};
