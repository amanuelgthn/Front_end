import React, { FC, useState } from 'react';


const Pointer: FC = () => {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    })

    function handlePointerMove(e) {
        setPosition({
            x: e.clientX,
            y: e.clientY
        })
    }
    return (
        <>
            <h1>Move your Cursor</h1>
            <div onPointerMove={handlePointerMove}
                style={{position: 'relative',
                        width: '100vw',
                        height: '100vh'
                }}
                >
            <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -20,
        top: -20,
        width: 20,
        height: 20,
      }} /></div>
        </>
    )
}

export default Pointer