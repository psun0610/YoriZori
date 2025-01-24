module.exports = {
  parser: "@typescript-eslint/parser", // TypeScript를 위한 파서 설정
  parserOptions: {
    ecmaVersion: 2020, // 최신 ECMAScript 기능 사용
    sourceType: "module", // import/export 사용
    ecmaFeatures: {
      jsx: true, // JSX 지원
    },
  },
  settings: {
    react: {
      version: "detect", // React 버전을 자동으로 감지
    },
  },
  plugins: ["react", "@typescript-eslint"], // 사용 플러그인
  extends: [
    "eslint:recommended", // ESLint 기본 권장 설정
    "plugin:react/recommended", // React 권장 설정
    "plugin:@typescript-eslint/recommended", // TypeScript 권장 설정
    "plugin:prettier/recommended", // Prettier와 통합
    "react-app",
  ],
  rules: {
    // 프로젝트에 맞는 추가 규칙 설정
    "react/react-in-jsx-scope": "off", // React 17+에서는 필요하지 않음
    "@typescript-eslint/explicit-module-boundary-types": "off", // 함수 반환 타입 비활성화
    "@typescript-eslint/no-explicit-any": "warn", // `any` 타입 사용 경고
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true, // 작은따옴표 사용
        semi: true, // 세미콜론 사용
        trailingComma: "es5", // 여러 줄일 경우 마지막에 쉼표 추가
      },
    ],
  },
  env: {
    browser: true, // 브라우저 환경
    node: true, // Node.js 환경
    es2021: true, // 최신 ES 기능 사용
  },
};
