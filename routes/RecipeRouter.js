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
// router.post(
//   '/:recipe_id/comment',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.AddComment
// )
// router.delete(
//   '/:recipe_id/comments/:comment_id',
//   middleware.stripToken,
//   middleware.verifyToken,
//   controller.DeleteComment
// )

router.get(
  '/saved',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetSavedRecipes
)

module.exports = router
