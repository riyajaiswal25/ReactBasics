import React from 'react'

export default function PlusMinus() {

    const [number, setNumber] = React.useState(0);

    const handleAdd = () => {
        setNumber(number + 1);
    }
    const handleMinus = () => {
        setNumber(number - 1);

    }
  return (
    <div>
        <button onClick={handleAdd}>+</button>
        {number}
        <button onClick={handleMinus}>-</button>
    </div>
  )
}
