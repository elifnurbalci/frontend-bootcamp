import { useNoteContext } from "../context/NoteProvider";

function NoteList() {
  const {noteList} = useNoteContext();

  return (
    <div>
      <ul className="note-list">
        {noteList.map((note) => (
          <li
            className="note-detail"
            key={note.id}
            style={{ backgroundColor: note.color }}  >
            {note.title}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default NoteList