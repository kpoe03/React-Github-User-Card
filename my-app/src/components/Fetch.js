import React from 'react';
import UserCard from './UserCard'
import FollowersCard from './FollowersCard';

class Fetch extends React.Component {
  constructor() {
    super();
    this.state= {
      user: {},
      followers: []
    };
  };

componentDidMount() { 
    fetch('https://api.github.com/users/kpoe03')
    .then(res => res.json())
    .then(res => {
      console.log(res);
        this.setState({
          user: res
        })
      })
      .catch(error => {
        console.log(error);
      })
      
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
            <h1>Github User Card</h1>
            <UserCard user={this.state.user} key={this.state.user.id} />
            {this.state.followers.map(followers => (
              <FollowersCard followers={followers} key={this.state.user.followers.id} />
            ))}
          </div>
        )
      }
  };

  export default Fetch;