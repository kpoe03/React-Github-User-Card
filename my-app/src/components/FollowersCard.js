import React from 'react';

const FollowersCard = (props) => {
    return (
        <div className='App'>
            <img src={props.followers.avatar_url} alt={props.followers.name} />
            <p>Their username is {props.followers.login}</p>
            <p>{props.followers.followers_url}</p>
        </div>
    )
}

export default FollowersCard;