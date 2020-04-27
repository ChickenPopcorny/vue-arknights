const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    title: String,          // 中文名称
    engName: String,        // 英文名称
    pic: String,            // 图片路径
    description: String     // 描述
}, { versionKey: false })

module.exports = mongoose.model('Story', schema)