function AddNote() {
  const handleClick = () => {
  }

  return (
    <div>
      <input className= "search" type="text" name="" id="" placeholder="Search..."/>
      <div className="add-note">
        <textarea className="input-text" name="" id="" placeholder="Enter your note here..."></textarea>
        <div className="input-bottom">
        <div className="color-tag">
          <div className="pink" onClick={handleClick}>*</div>
          <div className="purple" onClick={handleClick}>*</div>
          <div className="yellow" onClick={handleClick}>*</div>
          <div className="blue" onClick={handleClick}>*</div>
          <div className="green" onClick={handleClick}>*</div>
        </div>
        <button className="btn-add">ADD</button>
        </div>
      </div>
    </div>
  )
}
export default AddNote