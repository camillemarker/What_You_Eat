const router = require('express').Router()
const controller = require('../controllers/RecipeController')
const middleware = require('../middleware')

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateRecipe
)
router.get('/', controller.GetAllRecipes)
router.get('/:recipe_id', controller.GetRecipe)
router.post(
  '/:recipe_id/save',
  middleware.stripToken,
  middleware.verifyToken,
  controller.SaveRecipe
)

module.exports = router
