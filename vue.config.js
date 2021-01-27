module.exports = {
    lintOnSave: false,
    // 生成test测试的打包文件
    outputDir:process.env.outputDir,
    devServer: {
        // host: '127.0.0.1',//如果是真机测试，就使用这个IP
        open: true,
        proxy: {
            "/api": {
                target: "http://152.136.47.80:8888/health-server/api/v1", //要跨域的域名 目标地址
                changeOrigin: true, //是否开启跨域  是否更改源路径
                ws: true,
                pathRewrite: {
                    "^/api": ""  // /api/ / 凡是/api开头的地址都可以跨域
                }
            }
        }
    },
}