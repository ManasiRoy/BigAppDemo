import React, { Component } from 'react'
import LoginForm from './Components/Login'
import Welcome from './Components/Welcome'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.scss'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }

  signIn(username, password) {
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  signOut() {
    this.setState({ user: null })
  }
  render() {
    return (
      <div>
        {
          (this.state.user) ?
            <Welcome
              user={this.state.user}
              onSignOut={this.signOut.bind(this)}
            />
            :
            <LoginForm
              onSignIn={this.signIn.bind(this)}
            />
        }
      </div>
    )
  }
}
