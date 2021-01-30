module.exports = {
    lintOnSave: false,
    // 生成test测试的打包文件
    outputDir:process.env.outputDir,
    devServer: {
        open: true,
        proxy: {
            "/health": {
                target: "http://152.136.47.80:8888/health-server/api/v1",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/health": "" 
                }
            },
            "/healthEcharts": {
                target: "http://152.136.47.80:8888/data-server/api/v1", 
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/healthEcharts": ""
                }
            },
        }
    },
}