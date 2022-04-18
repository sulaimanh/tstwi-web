module.exports = {
  testEnvironment: 'jsdom',
  moduleDirectories: [
    'node_modules',
    __dirname,
    `${__dirname}/jest`,
    `${__dirname}/components`,
  ],
  setupFiles: ['@testing-library/react/dont-cleanup-after-each'],
  setupFilesAfterEnv: ['<rootDir>/jest/setup.ts'],
}
export {}
