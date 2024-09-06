import { useState } from "react"

function AddNote() {
  
  const handleClick = (color) => {
    document.querySelectorAll('.color-tag span').forEach((s) => {
      s.style.display = 'none';
    });
    let span = document.querySelector(`.${color} span`);
    span.style.display = 'inline';
  };


  return (
    <div>
      <input className= "search" type="text" name="" id="" placeholder="Search..."/>
      <div className="add-note">
        <textarea className="input-text" name="" id="" placeholder="Enter your note here..."></textarea>
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
        <button className="btn-add">ADD</button>
        </div>
      </div>
    </div>
  )
}
export default AddNote
