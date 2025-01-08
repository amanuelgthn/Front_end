import React, { FC, useState } from 'react';


const ArrayList: FC = () => {
    const [name, setName] = useState('')
    const [nextId, setNextID] = useState(1)
    const [shoppinglist, setShoppingList] = useState([]);
    return (
        <>
            <h1>Add your shopping list</h1>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
                />
            <button
                onClick={() => {
                    setShoppingList([
                        ...shoppinglist,
                        { id: nextId, name: name }
                    ]
                    )
                    setNextID(nextId + 1)
                }}>Add</button>
                <ul>
                    {shoppinglist.map(item => (
                        <><li key={item.id}>{item.id}{item.name}</li><button onClick={() => {
                            setShoppingList(
                                shoppinglist.filter((a) => a.id !== item.id
                                ));
                                setNextID(nextId - 1)
                        }}>
                            Delete
                        </button></>
                    ))}
                </ul>
        </>
    )
}

export default ArrayList