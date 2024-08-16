import React from 'react'

function Five({ setFiveCount }) {
    // prop yerine { setFiveCount } yazarak destructure modeli ile yazmis olduk.
    const handleClick = () => {
        setFiveCount(
            (prevCount) => prevCount + 5);
    }
  return (
    <div>
        <button onClick={handleClick}>count + 5</button>
    </div>
  )
}

export default Five