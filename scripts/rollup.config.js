const babel = require('rollup-plugin-babel')
const vue = require('rollup-plugin-vue')
const replace = require('rollup-plugin-replace')
const meta = require('../package.json')

const config = {
  entry: 'src/index.js',
  plugins: [
    vue({
      css: process.env.BUILD === 'cjs' ? `dist/${meta.name}.css` : false
    }),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  moduleName: 'Lib',
  banner: `/*!
 * ${meta.name} v${meta.version}
 * ${meta.homepage}
 *
 * @license
 * Copyright (c) 2016 ${meta.author}
 * Released under the MIT license
 * ${meta.homepage}/blob/master/LICENSE
 */`
}

switch (process.env.BUILD) {
  case 'cjs':
    config.format = 'cjs'
    config.dest = `dist/${meta.name}.cjs.js`
    break
  case 'prod':
    config.format = 'umd'
    config.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    )
    break
  case 'dev':
  default:
    config.format = 'umd'
    config.dest = `dist/${meta.name}.js`
    config.plugins.push(
      replace({
        'process.env.NODE_ENV': JSON.stringify('development')
      })
    )
}

module.exports = config
