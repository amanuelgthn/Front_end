import { useState } from 'react';
export default function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y: 0
    });
    return (
        <div 
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={
                {
                    position: 'relative',
                    width: '100vw',
                    height: '100vh',
                }
            }>
                <div style={{
                    position: 'absolute',
                    backgroundColor: 'gold',
                    borderRadius: '50%',
                    transform: `translate(${position.x - 10}px, ${position.y - 140}px)`,
                    width: 20,
                    height: 20
                }} />
            </div>
    )
}