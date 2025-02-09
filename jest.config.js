export default  {
  // 指定测试环境
  testEnvironment: 'jsdom',

  // 文件扩展名
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],

  // 转换器配置
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },

  // 模块名称映射
  moduleNameMapper: {
    // 处理样式文件
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    // 处理图片等静态资源
    '\\.(jpg|jpeg|png|gif|svg)$': '<rootDir>/__mocks__/fileMock.js',
    // 路径别名配置（如果你使用了 @ 等别名）
    '^@/(.*)$': '<rootDir>/src/$1'
  },

  // 测试文件匹配规则
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)'
  ],

  // 设置测试覆盖率收集
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
  ],
}
