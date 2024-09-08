import { useNoteContext } from "../context/NoteProvider";

function Note() {
  const {note, setNote, noteList, setNoteList} = useNoteContext();
  return (
    <div>Note</div>
  )
}
export default Note