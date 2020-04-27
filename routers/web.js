const express = require('express')
const Article = require('../models/Article')
const Character = require('../models/Character')
const Story = require('../models/Story')
const global = require('../global')
const utils = require('../includes/utils')

const router = express.Router()

// ********** 文章接口 **********

// 根据 ID 查询单个数据
router.get('/web/api/article/:id', async (req, res) => {
  const data = await Article.findById(req.params.id)
  utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/web/api/article', async (req, res) => {
  let data = null
  
  if (req.query.category === '最新') {
    data = await Article.find().sort('-date').limit(5)
  } else {
    data = await Article.find(req.query).limit(5)
  }
  utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// ********** 干员接口 **********

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/web/api/character', async (req, res) => {
  const data = await Character.find(req.query)
  utils.handleSuccess(data, global.messages.selectSuccess, res)
})

// ********** 世界观接口 **********

// 查询全部数据，过滤条件使用 地址栏参数 传递
router.get('/web/api/story', async (req, res) => {
  const data = await Story.find(req.query)
  utils.handleSuccess(data, global.messages.selectSuccess, res)
})

module.exports = router