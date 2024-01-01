module.exports = {
  extends: [
    'plugin:import/typescript',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  rules: {
    '@typescript-eslint/func-call-spacing': 2,
    '@typescript-eslint/keyword-spacing': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    '@typescript-eslint/naming-convention': [
      2,
      {
        'selector': 'function',
        'format': ['PascalCase', 'camelCase']
      }
    ],
    '@typescript-eslint/no-useless-template-literals': 0,
    '@typescript-eslint/restrict-plus-operands': [2, { 'allowAny': true, 'skipCompoundAssignments': true }],
    '@typescript-eslint/semi': 2,
  },
  settings: {
    'import/resolver': {
      typescript: true,
    },
    'import/parsers': {
      '@typescript-eslint/parser': [ '.ts', '.tsx' ]
    }
  }
};
