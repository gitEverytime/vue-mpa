// const CompressionWebpackPlugin = require('compression-webpack-plugin')
const path = require('path');
const glob = require('glob');
const fs = require('fs')
const vuxLoader = require('vux-loader');

// 是否使用gzip
// const productionGzip = true;
// 需要gzip压缩的文件后缀
// const productionGzipExtensions = ['js', 'css'];
// CDN外链，会插入到index.html中

// 统一配置多页
function muliti() {
    const pages = {};
    glob.sync('./src/entries/**/main.js').forEach(path => {
        const chunk = path.split('./src/entries/')[1].split('/main.js')[0];//设置名称
        pages[chunk] = {
            entry: `src/entries/${chunk}/main.js`,
            template: `public/${chunk}.html`,
            filename: `${chunk}.html`,
            chunks: [ 'chunk-common', `${chunk}`]
        }

    });
    console.log('构建开始啦......................');
    return pages
}


module.exports = {
    // baseUrl: './', // 基本路径
    outputDir: 'dist', // 输出文件目录
    lintOnSave:false,
    pages:muliti(),
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // 配置merge
    configureWebpack: config => {
        config.optimization = {
            // runtimeChunk: 'single',
            splitChunks: {
                // chunks: 'initial',
                // minChunks: 1,  //被多少模块共享
                // maxInitialRequests: Infinity,
                // minSize: 10000,
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name (module) {
                            // get the name. E.g. node_modules/packageName/not/this/part.js
                            // or node_modules/packageName
                            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                            // npm package names are URL-safe, but some servers don't like @ symbols
                            return `fanwenqiang.${packageName.replace('@', '')}`;
                        }
                    },
                }
            }
        };
        require('vux-loader').merge(config, {
            options: {},
            plugins: ['vux-ui']
        });
        //Gzip压缩
//             // return {
//             //     plugins:[
//             //         new CompressionWebpackPlugin({
//             //             test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
//             //             threshold: 8192,
//             //             minRatio: 0.8
//             //         })
//             //     ]
//             // }
    },
    // chainWebpack: (config) => {
    //
    //     /**
    //      * 删除懒加载模块的prefetch，降低带宽压力
    //      * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
    //      * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
    //      */
    //         // CDN外链，会插入到index.html中
    //     const cdn = {
    //             // 生产环境
    //             build: {
    //                 css: [
    //                     'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
    //                 ],
    //                 js: [
    //                     'https://vuejs.org/js/vue.min.js',
    //                     'https://unpkg.com/iview/dist/iview.min.js',
    //                     // 'https://unpkg.com/element-ui@2.4.5/lib/index.js',
    //                     'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.14.1/xlsx.min.js',
    //                     'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.1.0/echarts.min.js',
    //                     // 'https://cdn.bootcss.com/vue-router/3.0.2/vue-router.js',
    //                     // 'https://cdn.jsdelivr.net/npm/v-charts/lib/index.min.js',
    //                     'https://unpkg.com/vue-amap/dist/index.js'
    //                 ]
    //             }
    //         };
    //     config.plugins
    //         .delete('prefetch')
    //     /**
    //      * 添加CDN参数到htmlWebpackPlugin配置中
    //      */
    //     config
    //         .plugin('html')
    //         .tap(args => {
    //             if (process.env.NODE_ENV === 'production') {
    //                 args[0].cdn = cdn.build;
    //             }
    //             return args
    //         });
    //     /**
    //      * 无需使用@import在每个scss文件中引入变量或者mixin，也可以避免大量@import导致build变慢
    //      * sass-resources-loader 文档链接：https://github.com/shakacode/sass-resources-loader
    //      */
    //     // const oneOfsMap = config.module.rule('scss').oneOfs.store
    //     // const sassResources = ['color.scss', 'mixin.scss', 'common.scss'] // scss资源文件，可以在里面定义变量，mixin,全局混入样式等
    //     // oneOfsMap.forEach(item => {
    //     //     item
    //     //         .use('sass-resources-loader')
    //     //         .loader('sass-resources-loader')
    //     //         .options({
    //     //             resources: sassResources.map(file => path.resolve(__dirname, 'src/style/' + file))
    //     //         })
    //     //         .end()
    //     // })
    // },
    runtimeCompiler: true,
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            css: {}, // 这里的选项会传递给 css-loader
            postcss: {} // 这里的选项会传递给 postcss-loader
        }, // css预设器配置项
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },
// parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
// pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
// webpack-dev-server 相关配置
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 9086,
        https: false,
        hotOnly: false,
        proxy: {
            '/a_api/*': {
                target: 'http://120.78.4.101:5058/',
                changeOrigin: true,
                secure: false
            },
        }, // 设置代理
        before: app => {}
    },
// 第三方插件配置
    pluginOptions: {}
};

