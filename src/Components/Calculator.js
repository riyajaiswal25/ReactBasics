import React from 'react'

export default function Calculator() {

    const [val, setValue] = React.useState(0);
  return (
    <div>
        <input value={val}/>
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
    </div>
  )
}
