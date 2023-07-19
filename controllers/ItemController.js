const { Item, User } = require('../models')

const AddItem = async (req, res) => {
  try {
    const { payload } = res.locals
    const user = await User.findById(payload.id)
    const item = await Item.create({ ...req.body, creator: user })
    user.groceryList.push(item)
    await user.save()

    res.send(user.groceryList)
  } catch (error) {
    throw error
  }
}

const GetAllItems = async (req, res) => {
  try {
    const { payload } = res.locals
    const user = await User.findById(payload.id).populate('groceryList')
    res.send(user.groceryList)
  } catch (error) {
    throw error
  }
}

const UpdateItem = async (req, res) => {
  try {
    const { payload } = res.locals
    const { item_id } = req.params
    const user = await User.findById(payload.id)
    const updatedItem = await Item.findByIdAndUpdate(item_id, req.body, {
      new: true
    })

    res.send(updatedItem)
  } catch (error) {
    throw error
  }
}

const DeleteItem = async (req, res) => {
  try {
    const { payload } = res.locals
    const { item_id } = req.params
    const user = await User.findById(payload.id)
    const index = user.groceryList.indexOf(item_id)
    if (index !== -1) {
      user.groceryList.splice(index, 1)
      await user.save()
    }

    await Item.findByIdAndDelete(item_id)
    res.send({ message: 'Item deleted successfully' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  AddItem,
  GetAllItems,
  UpdateItem,
  DeleteItem
}
