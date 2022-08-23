const Note = ({ note, toggleImportance, removeNote }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className="note">
      {note.content}
      <div><button onClick={toggleImportance}>{label}</button></div>
      <div><button onClick={removeNote}>remove</button></div>
    </li>
  )
}

export default Note