const Item = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item._id)
  }

  return (
    <li>
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Item
