import react, { FC, useState } from 'react';


let initialShapes = [
    {id: 0, type: 'circle', x:50, y:100 },
    {id: 1, type: 'square', x:150, y:100 },
    {id: 2, type: 'circle', x:200, y:100 },
    {id: 3, type: 'square', x:250, y:100 },
    
];

const CircleMover: FC = () => {
    const [shapes, setShapes] = useState(
        initialShapes
    )

    function handleClickCircles(e) {
        e.stopPropagation()
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'square') {
                // no change
                return shape;
            } else {
                return {
                ...shape,
                y: shape.y + 50,
            }
        }
        })
        setShapes(nextShapes)
    }
    function handleClickSquares(e) {
        e.stopPropagation()
        const nextShapes = shapes.map(shape => {
            if(shape.type === 'circle') {
                // no change
                return shape;
            } else {
                return {
                ...shape,
                y: shape.y + 50,
            }
        }
        })
        setShapes(nextShapes)
    }
    return (
        <>
            <button onClick={handleClickCircles}>Move the Circles down</button>
            <button onClick={handleClickSquares}>Move the Sqaures down</button>
            {shapes.map(shape => (
                <div
                    key={shape.id}
                    style={{
                        background: 'purple',
                        position: 'absolute',
                        left: shape.x,
                        top: shape.y,
                        borderRadius:
                            shape.type === 'circle' ? '50%' : '',
                        width: 20,
                        height: 20
                    }}
                ></div>
            ))}
        </>
    )
}

export default CircleMover