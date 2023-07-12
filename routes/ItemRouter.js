const router = require('express').Router()
const controller = require('../controllers/ItemController')
const middleware = require('../middleware')

router.get('/', controller.GetItems)

router.post('/', controller.CreateItem)

router.put('/:item_id', controller.UpdateItem)

router.delete('/:item_id', controller.DeleteItem)

module.exports = router
