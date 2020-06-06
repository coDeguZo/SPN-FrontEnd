import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './containers/ProfileContainer'
import Home from "./containers/Home"
// import Footer from './components/Footer'
// import { createStore } from 'redux'
import NbaContainer from './containers/NbaContainer'
import NbaPlayerIndex from './components/NbaPlayerIndex'
import { Route, Switch, Redirect} from 'react-router-dom'


class App extends React.Component {
  state = {
    players: [],
    Nbateams: [],
    teams: [],
    nbaLeague: [],
    leagues: [],
    currentUser: null,
    favoritePlayers: []
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
    fetch("http://localhost:3000/user_players")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      let userInfo = data.filter(user_player => this.state.currentUser.id === user_player.user_id)
      this.setState({ favoritePlayers: userInfo })
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

  handleDeleteFavorite = (id) => {
    fetch(`http://localhost:3000/user_players/${id}`, {
      method: "DELETE"
    })
    // .then(resp => resp.json())
    // .then(data => {
    //   let filtered = this.state.favoritePlayers.filter(players => players !== data)
    //   this.setState({ favoritePlayers: filtered })
    // })
  }



  render() {
    return (
      <div className="App">
        <Nav user={this.state.currentUser} logout={this.handleLogout}/>
        <Switch>
          {/* Home */}
          <Route exact path="/" render={() => <Home />}/>
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
          <Profile user={this.state.currentUser} favsPlayers={this.state.favoritePlayers} delete={this.handleDeleteFavorite}/>
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
