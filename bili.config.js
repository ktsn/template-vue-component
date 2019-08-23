const pkg = require('./package.json')

const banner = `/*!
* ${pkg.name} v${pkg.version}
* ${pkg.homepage}
*
* @license
* Copyright (c) 2018 ${pkg.author}
* Released under the MIT license
*/`

function capitalize(name) {
  const camelized = name.replace(/[-_](\w)/g, (_, c) => c.toUpperCase())
  return camelized[0].toUpperCase() + camelized.slice(1)
}

module.exports = {
  input: 'src/index.ts',
  output: {
    fileName: `${pkg.name}.[format][min][ext]`,
    format: ['cjs', 'es', 'umd', 'umd-min'],
    moduleName: capitalize(pkg.name)
  },

  banner,

  globals: {
    vue: 'Vue'
  },
  externals: ['vue'],

  plugins: {
    vue: {
      css: false
    },

    typescript2: {
      tsconfig: './tsconfig.main.json',
      clean: true,
      typescript: require('typescript')
    },

    'css-only': {
      output: 'dist/' + pkg.name + '.css'
    }
  }
}
