module.exports = {
  extends: [
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'react/jsx-boolean-value': [2, 'never'],
    'react/jsx-handler-names': [2, {
      eventHandlerPrefix: 'handle',
      eventHandlerPropPrefix: 'on',
    }],
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': [2, {
      ignoreCase: true,
      callbacksLast: false,
      shorthandFirst: false,
      reservedFirst: true,
			multiline: 'last'
    }],
		'react/react-in-jsx-scope': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/no-danger': 1,
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-no-useless-fragment': 2,
    'react/hook-use-state': 2,
    'react/jsx-no-leaked-render': 2,
  },

  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json']
      }
    },
		react: {
      version: 'detect',
    },
  }
};