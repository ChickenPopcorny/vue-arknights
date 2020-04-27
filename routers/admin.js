const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const multer = require('multer')
const path = require('path')
const Character = require('../models/Character')
const Article = require('../models/Article')
const Story = require('../models/Story')
const User = require('../models/User')
const global = require('../global')
const utils = require('../includes/utils')

const router = express.Router()



// ********** 中间件 **********

// 全局捕获异常
router.use((err, req, res, next) => {
    utils.handleError(err, global.messages.unknownError, 1, res)
})

// 鉴权，排除登录接口 /api/login
async function checkAuth(req, res, next) {
    const token = req.headers.authorization
    // 如果 token 验证失败，则进行拦截
    jwt.verify(token, global.secret, async (err, decoded) => {
        if (err) {
            utils.handleError({}, global.messages.noAuthError, 2, res)
        } else {
            next()
        }
    })
}

// ********** 干员接口 **********

// 根据 ID 查询单个数据
router.get('/api/character/:id', checkAuth, async (req, res) => {
    const data = await Character.findById(req.params.id)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/api/character', checkAuth, async (req, res) => {
    const data = await Character.find(req.query)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 添加数据，数据使用 请求体 传递
router.post('/api/character', checkAuth, async (req, res) => {
    const data = await Character.create(req.body)
    utils.handleSuccess(data, global.messages.createSuccess, res)
})

// 根据 ID 修改数据，数据使用 请求体 传递
router.put('/api/character', checkAuth, async (req, res) => {
    const data = await Character.findByIdAndUpdate(req.body._id, req.body)
    utils.handleSuccess(data, global.messages.updateSuccess, res)
})

// 根据 ID 删除数据，ID 使用 路由参数 传递
router.delete('/api/character/:id', checkAuth, async (req, res) => {
    const data = await Character.findByIdAndDelete(req.params.id)
    utils.handleSuccess(data, global.messages.deleteSuccess, res)
})

// ********** 世界观接口 **********

// 根据 ID 查询单个数据
router.get('/api/story/:id', checkAuth, async (req, res) => {
    const data = await Story.findById(req.params.id)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/api/story', checkAuth, async (req, res) => {
    const data = await Story.find(req.query)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 添加数据，数据使用 请求体 传递
router.post('/api/story', checkAuth, async (req, res) => {
    const data = await Story.create(req.body)
    utils.handleSuccess(data, global.messages.createSuccess, res)
})

// 根据 ID 修改数据，数据使用 请求体 传递
router.put('/api/story', checkAuth, async (req, res) => {
    const data = await Story.findByIdAndUpdate(req.body._id, req.body)
    utils.handleSuccess(data, global.messages.updateSuccess, res)
})

// 根据 ID 删除数据，ID 使用 路由参数 传递
router.delete('/api/story/:id', checkAuth, async (req, res) => {
    const data = await Story.findByIdAndDelete(req.params.id)
    utils.handleSuccess(data, global.messages.deleteSuccess, res)
})

// ********** 文章接口 **********

// 根据 ID 查询单个数据
router.get('/api/article/:id', checkAuth, async (req, res) => {
    const data = await Article.findById(req.params.id)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/api/article', checkAuth, async (req, res) => {
    const data = await Article.find(req.query)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 添加数据，数据使用 请求体 传递
router.post('/api/article', checkAuth, async (req, res) => {
    const data = await Article.create(req.body)
    utils.handleSuccess(data, global.messages.createSuccess, res)
})

// 根据 ID 修改数据，数据使用 请求体 传递
router.put('/api/article', checkAuth, async (req, res) => {
    const data = await Article.findByIdAndUpdate(req.body._id, req.body)
    utils.handleSuccess(data, global.messages.updateSuccess, res)
})

// 根据 ID 删除数据，ID 使用 路由参数 传递
router.delete('/api/article/:id', checkAuth, async (req, res) => {
    const data = await Article.findByIdAndDelete(req.params.id)
    utils.handleSuccess(data, global.messages.deleteSuccess, res)
})

// ********** 用户接口 **********

// 根据 ID 查询单个用户，ID 使用 路由参数 传递
router.get('/api/user/:id', checkAuth, async (req, res) => {
    const data = await User.findById(req.params.id)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 根据 token 查询单个用户，token 使用 路由参数 传递
router.get('/api/usertoken/:token', checkAuth, async (req, res) => {
    const tokenData = jwt.verify(req.params.token, global.secret)
    const data = await User.findById(tokenData._id)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/api/user', checkAuth, async (req, res) => {
    const data = await User.find(req.query)
    utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 添加用户，用户数据使用 请求体 传递
router.post('/api/user', checkAuth, async (req, res) => {
    const data = await User.create(req.body)
    utils.handleSuccess(data, global.messages.createSuccess, res)
})

// 根据 ID 修改数据，数据使用 请求体 传递
router.put('/api/user', checkAuth, async (req, res) => {
    const data = await User.findByIdAndUpdate(req.body._id, req.body)
    utils.handleSuccess(data, global.messages.updateSuccess, res)
})

// 根据 ID 删除数据，ID 使用 路由参数 传递
router.delete('/api/user/:id', checkAuth, async (req, res) => {
    const data = await User.findByIdAndDelete(req.params.id)
    utils.handleSuccess(data, global.messages.deleteSuccess, res)
})

// ********** 图片上传接口 **********
const upload = multer({ dest: path.resolve('public', 'uploads') })

router.post('/api/upload', checkAuth, upload.single('file'), (req, res) => {
    utils.handleSuccess(req.file, global.messages.uploadSuccess, res)
})

// ********** 用户登录接口 **********
router.post('/api/login', async (req, res) => {
    const { username, password } = req.body
    const user = await User.findOne({ username }).select('password')
    // 如果输入的用户名不存在，则返回错误信息
    if (!user) {
        return utils.handleError({}, global.messages.loginError, 2, res)
    }
    // 如果用户存在，则取出密码密文，与传入的明文密码比对
    // 如果不一致，则密码错误，返回错误信息
    const hash = user.password
    if (!bcrypt.compareSync(password, hash)) {
        return utils.handleError({}, global.messages.loginError, 2, res)
    }
    // 都没有问题，则证明登录成功，使用密钥生成 token，返回给客户端
    const token = jwt.sign({ _id: user._id }, global.secret)
    utils.handleSuccess({ token }, global.messages.loginSuccess, res)
})

module.exports = router