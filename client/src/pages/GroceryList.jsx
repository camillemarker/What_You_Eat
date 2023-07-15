import { useState, useEffect } from 'react'
import { getItems, deleteItem, addItem } from '../services/ItemService'
import ItemForm from '../components/ItemForm'
import Item from '../components/Item'

const GroceryList = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const fetchedItems = await getItems()
        setItems((prevItems) => [...prevItems, ...fetchedItems])
      } catch (error) {
        console.error('Error retrieving items', error)
      }
    }

    fetchItems()
  }, [])

  const handleDeleteItem = async (itemId) => {
    try {
      await deleteItem(itemId)
      setItems((prevItems) => prevItems.filter((item) => item._id !== itemId))
    } catch (error) {
      console.error('Error deleting item', error)
    }
  }

  const handleAddItem = async (newItem) => {
    try {
      const createdItem = await addItem(newItem)
      setItems((prevItems) => [...prevItems, createdItem])
    } catch (error) {
      console.error('Error adding item', error)
    }
  }

  return (
    <div>
      <h1>Grocery List</h1>
      <ItemForm addItem={handleAddItem} />
      <ul>
        {items.map((item) => (
          <Item key={item._id} item={item} onDelete={handleDeleteItem} />
        ))}
      </ul>
    </div>
  )
}

export default GroceryList
