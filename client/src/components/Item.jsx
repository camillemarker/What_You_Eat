const Item = ({ item, onDelete }) => {
  const handleDelete = () => {
    onDelete(item._id)
  }

  return (
    <li>
      <span>
        {item.quantity} {item.name}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default Item
