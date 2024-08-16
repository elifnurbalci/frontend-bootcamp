function List({ item }) {
  return (
    <li>
    <span>{item.type} - </span>
    <span>£{item.amount}</span>
  </li>
  )
}

export default List