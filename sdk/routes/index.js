const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')

const models = require('../models')

router.get('/', function (req, res, next) {
  res.status(400)
  next(null, req, res, next)
})


router.post('/api/v1/tokens', bodyParser.json(), models.createToken)
router.post('/api/v1/finalizeToken', bodyParser.json(), models.finalizeToken)

router.get('/api/v1/tokens', bodyParser.json(), models.getTokens)
router.get('/api/v1/tokens/:uuid', bodyParser.json(), models.getToken)

router.post('/api/v1/swaps', bodyParser.json(), models.swapToken)
router.post('/api/v1/finalizeSwap', bodyParser.json(), models.finalizeSwap)

router.get('/api/v1/fees', bodyParser.json(), models.getFees)

router.post('/api/v1/listProposals', bodyParser.json(), models.submitListProposal)
router.post('/api/v1/finalizeListProposal', bodyParser.json(), models.finalizeListProposal)
router.post('/api/v1/lists', bodyParser.json(), models.list)

router.get('/api/v1/listProposals/:uuid', bodyParser.json(), models.getListProposal)

router.post('/api/v1/decrypt', bodyParser.json(), models.decrypt)
module.exports = router
