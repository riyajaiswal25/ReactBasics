//Class Components

import React from 'react';

class DemoClass extends React.Component {
    //initialize class
    constructor(props){
        //used to call the contructor of parent class
        super(props);

        //will initialize component state
        this.state={
            ele: 5
        }
    }

    handleClick = () => {
        console.log("Button CLicked")
        this.setState({
            ele: 45
        })
    }
    render() {
        return <>
        <h5>Inside Demo Class Component: {this.state.ele}</h5>
        <button onClick={this.handleClick}>Click Me</button>
        </>
    }
}

export default DemoClass;