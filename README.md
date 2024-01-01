# @bluebottle/eslint-config
Bluebottle Digital ESLint configuration

## Install

```sh
npx install-peerdeps --dev @bluebottle/eslint-config
```

## Usage

In your `.eslintrc.js`:

```tsx
module.exports = {
  extends: ['@bluebottled'],
  parserOptions: {
    project: './tsconfig.json',
  },
};
```

## License

MIT