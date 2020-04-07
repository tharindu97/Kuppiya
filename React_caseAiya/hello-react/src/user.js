import React from 'react';
import ReactDOM from 'react-dom';

function User({firstName, lastName, university}){
    return (
        <div>
            <h1>{firstName} {lastName}</h1>
            <h2>University of {university}</h2>
        </div>
    )
}
export default User;