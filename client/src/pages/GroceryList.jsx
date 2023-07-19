import {
  AddItem,
  GetAllItems,
  DeleteItem,
  UpdateItem
} from '../services/ItemService'
import { useState, useEffect } from 'react'

const GroceryList = () => {
  const [items, setItems] = useState([])
  const [formValues, setFormValues] = useState({ name: '', quantity: '' })
  const [updateId, setUpdateId] = useState(null)

  const fetchItems = async () => {
    try {
      const items = await GetAllItems()

      setItems(items)
    } catch (error) {
      throw error
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  const handleSubmit = async (e) => {
    setFormValues({ name: '', quantity: '' })
    await AddItem(formValues)
  }

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleItemDelete = async (id) => {
    try {
      await DeleteItem(id)
      fetchItems()
    } catch (error) {
      console.log('Error in deleting item', error)
    }
  }

  const handleItemUpdate = async (e) => {
    e.preventDefault()
    try {
      await UpdateItem(updateId, formValues)
      fetchItems()
      setFormValues({ name: '', quantity: '' })
      setUpdateId(null)
    } catch (error) {
      console.log('Error in updating item', error)
    }
  }

  const handleUpdateStart = (id, item) => {
    setUpdateId(id)
    setFormValues({ name: item.name, quantity: item.quantity })
  }

  return (
    <div className="grocery-list">
      <h1>Grocery List</h1>
      <form onSubmit={updateId ? handleItemUpdate : handleSubmit}>
        <input
          type="text"
          value={formValues.name}
          onChange={handleChange}
          name="name"
          placeholder="Item"
        />
        <input
          type="text"
          value={formValues.quantity}
          onChange={handleChange}
          name="quantity"
          placeholder="Item Quantity"
        />
        <button type="submit">Add Item</button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}({item.quantity})
              <button onClick={() => handleItemDelete(item._id)}>✔️</button>
              <button onClick={() => handleUpdateStart(item._id, item)}>
                Edit
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GroceryList
