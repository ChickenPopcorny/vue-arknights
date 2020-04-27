// 导入模块
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const routerAdmin = require('./routers/admin')
const routerWeb = require('./routers/web')
const mongoose = require('mongoose')
const path = require('path')
const global = require('./global')

// 创建服务器对象
const app = express() 
const port = 3000 

// 中间件
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.resolve('public')))
app.use('/', routerAdmin)
app.use('/', routerWeb)

// 连接数据库
mongoose.connect(global.dbURL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false 
}).catch(err => console.log('数据库连接失败' + err))

// 监听端口
app.listen(port, function() {
    console.log(`服务器启动成功，正在监听 ${port} 端口`)
})