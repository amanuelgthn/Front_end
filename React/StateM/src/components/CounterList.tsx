import react, { FC, useState } from 'react'

let initialCounters = [
    0, 0, 0
];

const CounterList: FC = () => {
    const [counters, setCounters] = useState(
        initialCounters
    )
    function handleClickIncrement(index: number) {
        const nextCounters = counters.map((c , i) => {
            if(i === index) {
                return c + 1
            } else {
                return c
            }
        }
    )
    setCounters(nextCounters)
    }
    return (
        <ul>
            {counters.map((c, index) => (
               <li key={index}>
                    {c}
                    <button onClick={() => {
                        handleClickIncrement(index)}}>Add 1</button>
               </li>
            ))}
        </ul>
    )
}

export default CounterList