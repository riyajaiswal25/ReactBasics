import React, { Component } from 'react';
function Demo() {

    //let ele = 10
    //ele: state variable
    //setEle: function, used to update state variable
    //useState: hook used to create a state variable in functional components
    const [ele, setEle] = React.useState(10);

    const handleClick = () => {
        console.log("Button Clicked !")
        setEle(50);
        console.log("Ele: ",ele)
    }

    const handleClickWithArgs = (argument) => {

    }

    return <> <h5>Inside Demo Component: {ele}</h5>

    <button onClick={handleClick}>Click Me</button>
    </>
}

export default Demo;