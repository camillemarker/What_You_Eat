const router = require('express').Router()
const controller = require('../controllers/RecipeController')

router.get('/', controller.GetRecipes)

module.exports = router
