import { useState } from 'react';
import MovingDot from './MovingDot.js';

export default function MyCheckBox() {
    const [Liked, setLiked] = useState(true);

    function handleChange(event) {
        setLiked(event.target.checked)
    }
    return (
        <>
            <label>
                <input type='checkbox'
                        checked={Liked}
                        onChange={handleChange} />
                        I liked this
            </label>
            <p>You {Liked ? "liked" : "did't like"} this</p>
            <Form />
        </>
    )
}

function Form() {
  const [name, setName] = useState('Amanuel');
  const [age, setAge] = useState(28);

  return (
    <>
    <input value = {name}
            onChange={e => setName(e.target.value)}
            />
    <button onClick={() => setAge(age + 1)}>
      Increament age
      </button>
      <p>You {name} are {age} years Young</p>
      < MovingDot />
    </>
  )
}

