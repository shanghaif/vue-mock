const Mock = require('mockjs')
// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    // 配置ajax的请求延时
    timeout: 1500
})

//格式： Mock.mock("请求的URL地址",{"数据对象"})
// Mock.mock("/api/login", (req, res) => {});

//Mock.mock( rurl, rtype, template )
// Mock.mock("/api/login","post" (req, res) => {});

const url = {
    testLogin: '/api/login',
    testUrl: '/api/peopleLists',
    echarts: '/api/echarts'
}
module.exports = [
    Mock.mock(url.testLogin, (req, res) => {
        {
            return Mock.mock({
                name: "admin",
                password: "123456",
                token: "20191129592"
            });
        }
    }),
    Mock.mock(url.testUrl, {
        "userInfo|4": [{ //生成num个userInfo的数据
            "id|+1": 1, //数字从1开始后续依次加一
            "name": "@cname", //名字为随机中文名字
            "ago|18-28": 25, //年龄为18-28之间的随机数字
            "sex|1": ["男", "女"], //性别是数组中的一个，随机的
            "job|1": ["web", "UI", "python", "php"] //工作是数组中的一个
        }]
    }),
    Mock.mock('url.echarts', () => {
        return {
            code: 1,
            data: {
                patientAsk: {
                    name: '患者咨询',
                    data: [
                        { value: 4000, name: '今日咨询' },
                        { value: 3000, name: '历史咨询' }
                    ]
                },
                userTypes: {
                    name: '用户分类',
                    data: [
                        { value: 8821, name: '糖尿病' },
                        { value: 6761, name: '高血压' },
                        { value: 8865, name: '心脏病' },
                        { value: 5865, name: '肿瘤' }
                    ]
                },
                todayWarn: {
                    name: '今日预警',
                    data: [
                        { value: 8821, name: '血糖预警' },
                        { value: 6761, name: '血压预警' }
                    ]
                }
            }
        }
    })
]
