import React, { createContext, useContext, useState } from "react"

const NoteContext = createContext();
export const useNoteContext = () => useContext(NoteContext);

function NoteProvider({ children }) {
  const [note, setNote] = useState("");
  const [noteList, setNoteList] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedColor, setSelectedColor] = useState("pink");

  return (
    <NoteContext.Provider value={{note, setNote, noteList, setNoteList, search, setSearch, selectedColor, setSelectedColor}}>
        {children}
    </NoteContext.Provider>

  )
}
export default NoteProvider;
export { NoteContext };
