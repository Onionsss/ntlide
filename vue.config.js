// vue.config.js
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    chainWebpack: config => {
        //路径配置
        config.resolve.alias
            .set('assets', resolve('src/assets'))
            .set('style', resolve('src/style'))
    },
    pluginOptions: { // 第三方插件配置
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/style/color.less'),
                path.resolve(__dirname, './src/style/mixin.less')
            ] // less所在文件路径
        }
    },

    // webpack-dev-server 相关配置
    devServer: {
        // 调试端口
        // port: 8989
    }
    //其他配置....
}