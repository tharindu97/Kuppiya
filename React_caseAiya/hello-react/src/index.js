import React from 'react';
import ReactDOM from 'react-dom';
import User from './user';

function Hello(){
    return (
        <div>
            <div>Thari baba</div>
            <User firstName='Tharindu' lastName='kavishna'/>
        </div>
    )
}

ReactDOM.render(<Hello/>, document.querySelector('#root'));