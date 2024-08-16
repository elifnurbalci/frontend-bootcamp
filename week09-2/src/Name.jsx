function Name({name, surname, setStateName, setStateSurname, setChoosen}) {
    const handleClick = () => {
        setStateName(name);
        setStateSurname(surname);
        setChoosen({name: name , surname: surname});
    }
  return (
    <div onClick={handleClick}>
        {/* <p> {`${name} ${surname}`} <p/> */}
         <p>{name} {surname}</p>
    </div>
  )
}

export default Name