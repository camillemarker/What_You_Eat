import { useState } from 'react'

const ItemForm = ({ addItem }) => {
  const [itemQuantity, setItemQuantity] = useState('')
  const [itemName, setItemName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newItem = {
        name: itemName,
        quantity: itemQuantity
      }

      const createdItem = await addItem(newItem)

      setItemQuantity('')
      setItemName('')

      console.log('ITEM CREATED')
    } catch (error) {
      console.error('ERROR CREATING ITEM', error)
    }
  }

  return (
    <div>
      <h1>Add Item</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemQuantity}
          onChange={(e) => setItemQuantity(e.target.value)}
          placeholder="Item Quantity"
        />
        <input
          type="text"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          placeholder="Item"
        />
        <button onClick={handleSubmit}>Add Item</button>
      </form>
    </div>
  )
}

export default ItemForm
