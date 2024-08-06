import React, { useState } from 'react'

type Props = {}

const Counter = (props: Props) => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h2>Count: {count}</h2>
            <button className='text-xl border rounded' onClick={() => setCount(count + 1)}>+</button>
        </div>
    )
}

export default Counter