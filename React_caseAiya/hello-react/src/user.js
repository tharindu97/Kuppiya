import React from 'react';
import ReactDOM from 'react-dom';

function User(props){
    return (
        <div>
            <h1>{props.firstName} {props.lastName}</h1>
            <h2>University of Kelaniya</h2>
        </div>
    )
}
export default User;