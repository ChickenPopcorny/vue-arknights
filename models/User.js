const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const schema = new mongoose.Schema({
    username: String,   // 用户名
    password: {         // 密码
        type: String,
        select: false,
        set: v => bcrypt.hashSync(v, 10) // 创建时直接加密
    }
}, { versionKey: false })

const model = mongoose.model('User', schema)

module.exports = model