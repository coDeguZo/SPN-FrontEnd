import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './containers/ProfileContainer'
// import Footer from './components/Footer'
// import { createStore } from 'redux'
import NbaContainer from './containers/NbaContainer'
import NbaPlayerIndex from './components/NbaPlayerIndex'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'


class App extends React.Component {
  state = {
    players: [],
    Nbateams: [],
    teams: [],
    nbaLeague: [],
    leagues: [],
    currentUser: null
  }

  componentDidMount() {
    fetch("http://localhost:3000/leagues")
    .then(resp => resp.json())
    .then(data => {
      const nba = data.find(league => league.name === "NBA")
      this.setState({ nbaLeague: nba })
      this.setState( { leagues: data })
    })
    
    fetch("http://localhost:3000/teams")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      const teams = data.filter(team => +team.league_id === 33)
      this.setState({ Nbateams: teams })
      this.setState({ teams: data })
    })

    fetch("http://localhost:3000/players")
    .then(resp => resp.json())
    .then(data => {
      this.setState({ players: data })
    })
    if(localStorage.getItem("token")){
    fetch("http://localhost:3000/login", {
      headers: { "Authenticate": localStorage.token }
    })
    .then(resp => resp.json())
    .then(user => {
      this.handleLogin(user)
    })
    } else {
      console.log("No Token Found")
    }
  }

  handleLogin = (user) => {
    // console.log(user)
    this.setState({ currentUser: user })
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({ currentUser: null })
  }

  render() {
    return (
      <div className="App">
        <Nav user={this.state.currentUser} logout={this.handleLogout}/>
        <Switch>
          {/* NBA */}
          <Route exact path="/nba" render={ () => <NbaContainer players={this.state.players} teams={this.state.Nbateams}/>} />
          {/* Nba/Players */}
          <Route exact path="/nba/players" render={ () => <NbaPlayerIndex players={this.state.players} teams={this.state.Nbateams} league={this.state.nbaLeague}/>} />
          {/* Login */}
          <Route exact path="/login" render={ () => (
          this.state.currentUser === null || localStorage.length === 0 ? 
          <Login loginUser={this.handleLogin}/>
          :
          <Redirect to="/profile"/>
          )} />
          {/* Profile */}
          <Route exact path="/profile" render={ () => (
          this.state.currentUser === null || localStorage.length === 0 ?
          <Redirect to="/login"/>
          :
          <Profile user={this.state.currentUser}/>
          )} />
          {/* SignUp */}
          <Route exact path='/signup' render={ () => (
          this.state.currentUser === null || localStorage.length === 0 ?
          <Signup loginUser={this.handleLogin}/>
          :
          <Profile user={this.state.currentUser}/>
          )} />
        </Switch>
      </div>
    );
  }
}

export default App;
