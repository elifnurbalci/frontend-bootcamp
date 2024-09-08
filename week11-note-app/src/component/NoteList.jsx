import { useNoteContext } from "../context/NoteProvider";

function NoteList() {
  const {note, setNote, noteList, setNoteList} = useNoteContext();

  return (
    <div>
      <ul>
        {noteList.map((note) => (
          <div className='note-list' key={note.id}>
            <li>
              {note.title}
            </li>
          </div>
        ))}
      </ul>
    </div>
  )
}
export default NoteList