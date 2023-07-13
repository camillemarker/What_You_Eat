import { useState, useEffect } from 'react'
import axios from 'axios'

const GroceryList = () => {
  const [items, setitems] = useState([])
  const [itemName, setItemName] = useState('')
  const [itemQuantity, setItemQuantity] = useState('')

  useEffect(() => {
    fetchItems()
  }, [])

  const fetchItems = async () => {
    try {
      const response = await axios.get('/api/items')
      setitems(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return <div></div>
}

export default GroceryList
