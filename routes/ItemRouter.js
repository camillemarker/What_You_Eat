const router = require('express').Router()
const controller = require('../controllers/ItemController')
const middleware = require('../middleware')

router.post(
  '/add',
  middleware.stripToken,
  middleware.verifyToken,
  controller.AddItem
)

router.get(
  '/all',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetAllItems
)

router.put(
  '/:item_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateItem
)

router.delete(
  '/:item_id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteItem
)

module.exports = router
