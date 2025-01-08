import React, { FC, useEffect, useState } from 'react'

const TrafficLight: FC = () => {
    const [walk, setWalk] = useState(true)


    function handleClick() {
        setTimeout(() => {
            setWalk(!walk)
        }, 1000);
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setWalk((preWalk) => !preWalk)
        }, 5000);
        return () => clearInterval(interval)
    }, []);
  return (
    <>
        <h1>hello</h1>
        <button onClick={handleClick}>
            Change to {walk ? 'Stop' : 'Walk'}
        </button>
        <h1 style={{ 
            color: walk ? 'darkgreen' : 'red'
        }}>
            {walk ? 'Walk' : 'Stop'}
        </h1>
    </>
  )
}

export default TrafficLight
