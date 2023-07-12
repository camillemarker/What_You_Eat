const { Item } = require('../models')

const GetItems = async (req, res) => {
  try {
    const items = await Item.find({})
    res.send(items)
  } catch (error) {
    throw error
  }
}

const CreateItem = async (req, res) => {
  try {
    const item = await Item.create({ ...req.body })
    res.send(item)
  } catch (error) {
    throw error
  }
}

const UpdateItem = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.item_id, req.body, {
      new: true
    })
    res.send(item)
  } catch (error) {
    throw error
  }
}

const DeleteItem = async (req, res) => {
  try {
    await Item.deleteOne({ _id: req.params.item_id })
    res.send({ msg: 'Item Deleted', payload: req.params.item_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetItems,
  CreateItem,
  UpdateItem,
  DeleteItem
}
