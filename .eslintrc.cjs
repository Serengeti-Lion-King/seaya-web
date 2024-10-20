module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 15,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-uses-react': 'off', // React 17 이상에서는 필요하지 않음
    'react/react-in-jsx-scope': 'off', // React 17 이상에서는 필요하지 않음
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
        js: 'never',
        jsx: 'never',
      },
    ],
    'react/require-default-props': 'off',

    // 화살표 함수로 컴포넌트 정의 강제
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function', // 이름이 있는 컴포넌트는 화살표 함수로 강제
        unnamedComponents: 'arrow-function', // 익명 컴포넌트도 화살표 함수로 강제
      },
    ],

    // 모든 콜백에서 화살표 함수 사용 강제
    'prefer-arrow-callback': 'error',

    // TypeScript와 관련된 규칙
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 함수 반환 타입 지정 비활성화
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 사용되지 않는 변수 경고

    'import/no-unresolved': 'off',
  },
  ignorePatterns: ['**/*.svg'],
  settings: {
    react: {
      version: 'detect', // React 버전을 자동으로 감지
    },
    'import/resolver': {
      alias: {
        map: [
          ['@assets', './src/assets'], // Vite에서 사용 중인 별칭 추가
          ['@components', './src/components'], // Vite에서 사용 중인 별칭 추가
          ['@features', './src/features'], // Vite에서 사용 중인 별칭 추가
          ['@hooks', './src/hooks'], // Vite에서 사용 중인 별칭 추가
          ['@pages', './src/pages'], // Vite에서 사용 중인 별칭 추가
          ['@layouts', './src/layouts'], // Vite에서 사용 중인 별칭 추가
          ['@styles', './src/styles'], // Vite에서 사용 중인 별칭 추가
          ['@utils', './src/utils'], // Vite에서 사용 중인 별칭 추가
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // 사용 중인 파일 확장자 추가
      },
    },
  },
};
