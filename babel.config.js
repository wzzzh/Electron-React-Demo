module.exports = {
  presets: [
    [
      'react-app',
      {
        useBuiltIns: 'entry',
      },
    ],
  ],
  plugins: [
    ['import', { libraryName: 'antd', style: 'css' }], // `style: true` 会加载 less 文件
  ],
}
