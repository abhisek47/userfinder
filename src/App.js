import React , { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchUser from './components/search-users/search-user.component';


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userList: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(user => this.setState({userList:user}))
  }

  searchUsers = (e) => {
    this.setState({
      searchField: e.target.value
    })
  }
  
  render(){
    const { userList , searchField } = this.state;
    const filteredUser = userList.filter((user) => (
      user.name.toLowerCase().includes(searchField.toLowerCase())
    ))
    return(
      <div className='App'>
        <SearchUser searchUsers={this.searchUsers} />
        <CardList users={filteredUser} />
      </div>
    )
  }
}

export default App;
