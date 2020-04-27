const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,          // 标题
    date: Date,             // 发布日期
    category: String,       // 分类
    content: String         // 内容
}, { versionKey: false })

module.exports = mongoose.model('Article', schema)