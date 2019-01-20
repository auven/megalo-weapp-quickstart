const CopyWebpackPlugin = require('copy-webpack-plugin')
const vantWeapp = require('./vant-weapp')
const _ = require('../util')

const formatPath = package => {
  return package.packages.map(item => {
    return {
      from: _.resolve(package.from + item),
      to: _.resolve(package.to + item)
    }
  })
}

module.exports = new CopyWebpackPlugin([...formatPath(vantWeapp)], {})
