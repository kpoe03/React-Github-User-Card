import React from 'react';

const UserCard = (props) => {
    return (
        <div className='App'>
            <h3>User: {props.user.name}</h3>
            <img src={props.user.avatar_url} alt={props.user.name} />
            <p>Their username is {props.user.login}</p>
            <p>They are following {props.user.following} person</p>
            <p>Their bio says: {props.user.bio}</p>
        </div>
    )
}

export default UserCard;