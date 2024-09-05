import React, { createContext, useContext } from "react"

const NoteContext = createContext();
export const useNoteContext = () => useContext(NoteContext);


function NoteProvider({ children }) {
  return (
    <NoteContext.Provider>
        {children}
    </NoteContext.Provider>

  )
}
export default NoteProvider;
export { NoteContext };
