import { useNoteContext } from "../context/NoteProvider";
import { useEffect, useState } from "react";

function AddNote() {

  const {note, setNote, setNoteList, search, setSearch, selectedColor, setSelectedColor} = useNoteContext();

  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSave = () => {
    setNote({
      text: text,
      color: selectedColor
    });
  };

  useEffect(() => {
    if (note) {
      const addNoteFunc = (note) => {
        setNoteList((prev) => [
          ...prev,
          { id: prev.length + 1, title: `Note ${prev.length + 1}`, color: note.color, value: note.text },
        ]);
      };
      addNoteFunc(note);
    }
  }, [note]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const handleClick = (color) => {
    document.querySelectorAll('.color-tag span').forEach((s) => {
      s.style.display = 'none';
    });
    let span = document.querySelector(`.${color} span`);
    span.style.display = 'inline';
    setSelectedColor(color);
  };

  return (
    <div>
      <input className= "search" type="text" placeholder="Search..." value="" onChange={handleSearch}/>
      <div className="add-note">
        <textarea className="input-text" placeholder="Enter your note here..." value={text} onChange={handleChange}></textarea>
        <div className="input-bottom">
        <div className="color-tag">
          <div className="pink" onClick={() => handleClick("pink")}>
          <span className="material-symbols-outlined">check</span>
          </div>
          <div className="purple" onClick={() => handleClick("purple")}>
            <span className="material-symbols-outlined">check</span>
          </div>
          <div className="yellow" onClick={() => handleClick("yellow")}>
            <span className="material-symbols-outlined">check</span>
          </div>
          <div className="blue" onClick={() => handleClick("blue")}>
            <span className="material-symbols-outlined">check</span>
          </div>
          <div className="green" onClick={() => handleClick("green")}>
            <span className="material-symbols-outlined">check</span>
        </div>
        </div>
        <button className="btn-add" onClick={handleSave}>ADD</button>
        </div>
      </div>
    </div>
  )
}
export default AddNote
