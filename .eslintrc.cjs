module.exports = {
  // 设定当前目录为eslint根目录
  root: true,
  // 设定eslint的env
  env: {
    es2021: true,
    browser: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  settings: {
    react: {
      pragma: 'React',
      version: 'detect'
    }
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['@typescript-eslint', 'react', 'prettier', 'react-hooks'],
  rules: {
    'react-hooks/rules-of-hooks': 'error', // 检查 Hook 的规则
    'react-hooks/exhaustive-deps': 'warn', // 检查 effect 的依赖
    'react/react-in-jsx-scope': 'off', // 使用 jsx 时不需要引用 React
    '@typescript-eslint/strict-boolean-expressions': 'off', // 表达式中的布尔值必须严格是布尔类型
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/triple-slash-reference': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/promise-function-async': 0,
    'padding-line-between-statements': [
      'error',
      // 给代码加上必要的空行风格
      {
        blankLine: 'always',
        prev: ['const', 'let', 'var', 'block', 'block-like'],
        next: '*'
      },
      {
        blankLine: 'always',
        prev: ['import'],
        next: ['const', 'let', 'var', 'block', 'block-like', 'expression']
      },
      { blankLine: 'never', prev: ['import'], next: ['import'] },
      { blankLine: 'never', prev: ['const'], next: ['const'] }
    ]
  }
}
