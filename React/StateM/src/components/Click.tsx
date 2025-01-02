import React, { FC, useState } from 'react'

const Click: FC = () => {
    const [count, setCount] = useState(0)
    function handleClick() {
        setCount(count + 1)
        // alert(`You clicked ${count} times`)
    }
  return (
    <>
        <button onClick={handleClick}>
            You clicked me {count} times
        </button>
    </>
  )
}

export default Click
