import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';
import Navbar from './navbar';
import Parent2 from './counter';

function Hello(){
    return (
        <div>
            <Navbar/>
            <div>Thari baba</div>
            <User firstName='Tharindu' lastName='kavishna' university='Kelaniya'/>
            <Parent2/>
        </div>
    )
}

ReactDOM.render(<Hello/>, document.querySelector('#root'));