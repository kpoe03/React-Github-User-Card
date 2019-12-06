import React from 'react';

class FollowingFetch extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            followers: []
        };
    };

    componentDidMount() {
        fetch('https://api.github.com/users/kpoe03/followers')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                this.setState({
                    followers: res
                })
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div className='App-header'>
                <h1>User Info</h1>
                {this.state.followers.map(followers => (
                    <FollowersCard followers={followers} key={this.state.user.followers.id} />
                ))}
                
            </div>
        )
    }
}

export default FollowingFetch;