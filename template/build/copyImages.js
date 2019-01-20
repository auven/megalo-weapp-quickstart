const CopyWebpackPlugin = require('copy-webpack-plugin')
const fs = require('fs')
const fse = require('fs-extra')
const _ = require('./util')
const { walk4Obj } = require('./util')
const exp4parse = /\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\/|\/\/[^\r\n]*|\s/g

// 获取主包images路径和分包images路径
function copyImages(appMainFile) {
  let txt = '',
    mainObj = {},
    subpackages = [],
    imagesPath = []
  /* const mainImagesPath = _.resolve('src/images')
  fse.ensureDirSync(mainImagesPath)
  imagesPath.push({
    from: mainImagesPath,
    to: _.resolve('dist-wechat/images')
  }) */

  try {
    txt = fs.readFileSync(appMainFile, 'utf8')
    txt = txt.replace(exp4parse, '')
    mainObj = walk4Obj(txt, 'exportdefault')['config'] || {}

    // 主包
    const mainPackage = mainObj.pages || []
    const mainPackageRoot = mainPackage[0].split('pages')[0]
    const mainPackagePath = _.resolve(`src/${mainPackageRoot}`)
    const mainImagesPath = _.resolve(mainPackagePath, 'images')
    fse.ensureDirSync(mainImagesPath)
    imagesPath.push({
      from: mainImagesPath,
      to: _.resolve(`dist-wechat/${mainPackageRoot}`, 'images')
    })

    // 分包
    subpackages = mainObj.subpackages || []
    subpackages.forEach(sp => {
      const { root } = sp
      const packagePath = _.resolve(`src/${root}`)
      if (fs.statSync(packagePath).isDirectory()) {
        const subpackImagesPath = _.resolve(packagePath, 'images')
        fse.ensureDirSync(subpackImagesPath)
        imagesPath.push({
          from: subpackImagesPath,
          to: _.resolve(`dist-wechat/${root}/images`)
        })
      }
    })
  } catch (e) {
    console.log(e)
  }

  return new CopyWebpackPlugin([...imagesPath])
}

module.exports = copyImages
