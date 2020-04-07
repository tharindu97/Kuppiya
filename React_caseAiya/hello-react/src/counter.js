import React from 'react';
import ReactDOM from 'react-dom';

function Child({onClickHandler}){
    return (
        <button onClick={onClickHandler}>
            Click me
        </button>
    )
}

export default class Parent2 extends React.Component{
    constructor(props){
        super(props);

        this.state={
            counter:0
        }
        this.handleAction = this.handleAction.bind(this);
    }

    handleAction(event){
        this.setState({
            counter:this.state.counter + 1
        })
    }

    render(){
        return (
            <div>
                <h2>Counter: {this.state.counter}</h2>
                <Child onClickHandler={this.handleAction} />
            </div>
            
        )
    }
}