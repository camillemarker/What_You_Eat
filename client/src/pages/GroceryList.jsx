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

  console.log('PRINT ITEMS 11111111')

  const fetchItems = async () => {
    try {
      const items = await GetAllItems()
      // const response = await GetAllItems()
      // const items = response.data
      console.log('PRINT ITEMS 22222222')
      setItems(items)
      console.log('PRINT ITEMS 3333333')
    } catch (error) {
      console.log('ERROR IN FETCH SAVED ITEMS', error)
      throw error
    }
  }

  useEffect(() => {
    console.log('BEFOREFETCHHHHHITEMSS')
    fetchItems()
    console.log('AFTERFETCHHHHHITEMMMS')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    // await fetchItems()
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
      console.error('Error in updating item', error)
    }
  }

  const handleUpdateStart = (id, item) => {
    setUpdateId(id)
    setFormValues({ name: item.name, quantity: item.quantity })
  }

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={updateId ? handleItemUpdate : handleSubmit}>
        <input
          type="text"
          value={formValues.quantity}
          onChange={handleChange}
          name="quantity"
          placeholder="Item Quantity"
        />
        <input
          type="text"
          value={formValues.name}
          onChange={handleChange}
          name="name"
          placeholder="Item"
        />
        <button type="submit">Add Item</button>
      </form>
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name}
              {item.quantity}{' '}
              <button onClick={() => handleItemDelete(item._id)}>
                Delete Item
              </button>
              <button onClick={() => handleUpdateStart(item._id, item)}>
                Edit Item
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default GroceryList
