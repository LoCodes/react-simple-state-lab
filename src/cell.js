import React, { Component } from 'react';


class Cell extends Component{

    constructor(props){
        super()
        this.state = {
        color: props.value  // ...define initial state with a key of 'color' set to the 'value' prop
        }
    }

    handleClick = () => {  //click listener! 
        this.setState({
            color: '#333'
        })
    }

    render(){
        return (
            <div className="cell"
            style={{backgroundColor: this.state.color}}            
            onClick={this.handleClick}> </div>
            
        )
    }

}

export default Cell;