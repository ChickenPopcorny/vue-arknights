const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: String,           // 中文名称
    engName: String,        // 英文名称
    cv: String,             // 声优
    vocation: String,       // 职业
    faction: String,        // 阵营
    tachie: String,         // 立绘路径
    description: String     // 描述
}, { versionKey: false })

module.exports = mongoose.model('Character', schema)