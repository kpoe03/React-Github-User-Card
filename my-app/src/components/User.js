import React from 'react';

const User = (props) => {
    return (
        <div className='App'>
            <h2>User's Name: {props.user.name}</h2>
        </div>
    )
}
export default User;