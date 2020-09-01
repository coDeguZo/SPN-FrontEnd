import React from 'react';
import './App.css';
import Nav from './components/Nav'
import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './containers/ProfileContainer'
import Home from "./containers/Home"
import About from './components/About'
// import Footer from './components/Footer'
// import { createStore } from 'redux'
import NbaContainer from './containers/NbaContainer'
import NbaPlayerIndex from './components/NbaPlayerIndex'
import NbaTeamsIndex from './components/NbaTeamsIndex'
import NbaTeamPage from './components/NbaTeamPage'
// import VideoContainer from './containers/VideoContainer'
import { Route, Switch, Redirect} from 'react-router-dom'
import swal from 'sweetalert';


class App extends React.Component {
  state = {
    players: [],
    Nbateams: [],
    teams: [],
    nbaLeague: [],
    leagues: [],
    currentUser: null,
    favoritePlayers: [],
    favoriteTeams: [],
    alreadyFollowed: [],
    displayed: 0,
    filteredPlayers: [],
    bookmarked: []
  }

  componentDidMount() {
    fetch("https://spn-backend2.herokuapp.com/leagues")
    .then(resp => resp.json())
    .then(data => {
      const nba = data.find(league => league.name === "NBA")
      this.setState({ nbaLeague: nba })
      this.setState( { leagues: data })
    })
    
    fetch("https://spn-backend2.herokuapp.com/teams")
    .then(resp => resp.json())
    .then(data => {
      const teams = data.filter(team => team.sport_title === "NBA" )
      // console.log(teams)
      this.setState({ Nbateams: teams })
      this.setState({ teams: data })
    })

    fetch("https://spn-backend2.herokuapp.com/players")
    .then(resp => resp.json())
    .then(data => {
      this.setState({ players: data })
      this.display(data)
    })

    if(localStorage.getItem("token")){
    fetch("https://spn-backend2.herokuapp.com/login", {
      headers: { "Authenticate": localStorage.token }
    })
    .then(resp => resp.json())
    .then(user => {
      this.handleLogin(user)
    })
    } else {
      console.log("No Token Found")
    }

    fetch("https://spn-backend2.herokuapp.com/user_bookmarks")
        .then(resp => resp.json())
        .then(data => {
          this.setState({bookmarked: data})
        })
  }

  changeUserState = (props) => {
    this.setState({ currentUser: props })
  }

  handleLogin = (user) => {
    // Fetching User_Player data for User signed in
    fetch("https://spn-backend2.herokuapp.com/user_players")
    .then(resp => resp.json())
    .then(data => {
      let userInfo = data.filter(user_player => this.state.currentUser.id === user_player.user_id)
      this.setState({ favoritePlayers: userInfo })
    })
    // Fetching User_Team data for User signed in
    fetch("https://spn-backend2.herokuapp.com/user_teams")
    .then(resp => resp.json())
    .then(data => {
      let userInfo = data.filter(user_team => this.state.currentUser.id === user_team.user_id)
      this.setState({ favoriteTeams: userInfo })
    })
    // Set the state of currentUser logged in!
    this.setState({ currentUser: user })
  }

  handleLogout = () => {
    localStorage.clear()
    this.setState({ currentUser: null })
    this.setState({ favoritePlayers: [] })
    this.setState({ favoriteTeams: [] })
  }

  deleteProfile = () => {
    fetch(`https://spn-backend2.herokuapp.com/users/${this.state.currentUser.id}`, {
        method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => {
        localStorage.clear()
        this.setState({ currentUser: null })
        this.setState({ favoritePlayers: [] })
        this.setState({ favoriteTeams: [] })
        swal({
            icon: "info",
            text: "Profile Deleted"
        })
    })
}

  findUserPlayer = (id) => {
    fetch("https://spn-backend2.herokuapp.com/user_players")
    .then(resp => resp.json())
    .then(data => {
      let foundPlayer = data.find(userPlayer => userPlayer.id === id)
        this.handleDeleteFavorite(foundPlayer.id)
        swal({
          icon: "info",
          text: "Player Unfollowed"
      })
      }
    )
  }

  favoriteNbaPlayer = (id, name) => {
    // console.log("hit", id)
    const alreadyFollowed = this.state.favoritePlayers.some(p => p.player.full_name === name)

    if (alreadyFollowed === true){
      return swal({
        icon: "info",
        text: "Player Already Followed"
    })} else if (this.state.currentUser === null) {
      return swal({
        icon: "error",
        text: "Must Be Signed In To Follow Player"
    })
    } else {
      const obj = {
        user_id: this.state.currentUser.id,
        player_id: id
    }
    fetch("hhttps://spn-backend2.herokuapp.com/user_players", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => {
          this.setState({ favoritePlayers: [...this.state.favoritePlayers, data] })
          return swal({
            icon: "success",
            text: "Followed Player"
        })
    })
  }
}

  handleDeleteFavorite = (id) => {
    fetch(`https://spn-backend2.herokuapp.com/user_players/${id}`, {
      method: "DELETE"
    })
    .then(resp => resp.json())
    .then(data => {
      let filtered = this.state.favoritePlayers.filter(players => players.id !== data.id)
      this.setState({ favoritePlayers: filtered })
    })
  }

  favoriteNbaTeam = (id, name) => {
    // console.log("hit", id)
    const alreadyFollowed = this.state.favoriteTeams.some(p => p.team.name === name)

    if (alreadyFollowed === true){
      return swal({
        icon: "info",
        text: "Team Already Followed"
    })} else if (this.state.currentUser === null) {
      return swal({
        icon: "error",
        text: "Must Be Signed In To Follow Team"
    })
    } else {
      const obj = {
        user_id: this.state.currentUser.id,
        team_id: id
    }
    fetch("https://spn-backend2.herokuapp.com/user_teams", {
        method: "POST",
        headers: {"Content-Type": "application/json", "Accept": "application/json"},
        body: JSON.stringify(obj)
    })
    .then(resp => resp.json())
    .then(data => {
          this.setState({ favoriteTeams: [...this.state.favoriteTeams, data] })
          return swal({
            icon: "success",
            text: "Followed Team"
        })
    })
  }
}

handleDeleteFavoriteTeam = (id) => {
  fetch(`https://spn-backend2.herokuapp.com/user_teams/${id}`, {
    method: "DELETE"
  })
  .then(resp => resp.json())
  .then(data => {
    let filtered = this.state.favoriteTeams.filter(teams => teams.id !== data.id)
    this.setState({ favoriteTeams: filtered })
  })
  swal({
    icon: "info",
    text: "Team Unfollowed"
})
}

  display = (prop) => {
      const filter = prop.slice(this.state.displayed, this.state.displayed+20)
      this.setState({ filteredPlayer: filter })
  }

  render() {
    return (
      <div className="App">
        {/* Nav Bar */}
        <Nav user={this.state.currentUser} logout={this.handleLogout} league={this.state.nbaLeague} teams={this.state.Nbateams}/>
        <br />
        <div className="main-container">
        <Switch>
          {/* Home */}
          <Route exact path="/" render={() => <Home user={this.state.currentUser}/>}/>
          {/* NBA */}
          <Route exact path="/nba" render={ () => <NbaContainer players={this.state.players} teams={this.state.Nbateams} league={this.state.nbaLeague} favs={this.state.favoritePlayers}/>} />
          {/* Nba/Players */}
          <Route exact path="/nba/players" render={ () => <NbaPlayerIndex players={this.state.players} filtered={this.state.filteredPlayers} teams={this.state.Nbateams} league={this.state.nbaLeague} user={this.state.currentUser} favs={this.favoriteNbaPlayer}/>} />
          {/* NBA/Teams */}
          <Route exact path="/nba/teams" render={() => <NbaTeamsIndex players={this.state.players} teams={this.state.Nbateams} league={this.state.nbaLeague} user={this.state.currentUser} favs={this.favoriteNbaTeam}/>} />
          {/* Login */}
          <Route exact path="/login" render={ () => (
          this.state.currentUser === null || localStorage.length === 0 ? 
          <Login loginUser={this.handleLogin}/>
          :
          <Redirect to="/profile"/>
          )} />
          {/* About */}
          <Route exact path="/about" render={() => <About />}/>
          {/* Profile */}
          <Route exact path="/profile" render={ () => (
          this.state.currentUser === null || localStorage.length === 0 ?
          <Redirect to="/login"/>
          :
          <Profile user={this.state.currentUser} edit={this.changeUserState} deleteProfile={this.deleteProfile} favsPlayers={this.state.favoritePlayers} favTeams={this.state.favoriteTeams} delete={this.findUserPlayer} deleteTeam={this.handleDeleteFavoriteTeam} bookmarks={this.state.bookmarked}/>
          )} />
          {/* SignUp */}
          <Route exact path='/signup' render={ () => (
          this.state.currentUser === null || localStorage.length === 0 ?
          <Signup loginUser={this.handleLogin}/>
          :
          <Profile user={this.state.currentUser} edit={this.changeUserState} deleteProfile={this.deleteProfile} favsPlayers={this.state.favoritePlayers} favTeams={this.state.favoriteTeams} delete={this.findUserPlayer} deleteTeam={this.handleDeleteFavoriteTeam} bookmarks={this.state.bookmarked}/>
          )} />
          {/* Team Pages */}
          {this.state.teams.map(team => {
            // debugger
            return (
              <Route exact path={"/nba/teams/" + team.name} key={team.id} render={() => (
                <NbaTeamPage key={team.id} team={team}/>
              )} />
            )
          })}
          {/* Video Container */}
          {/* <Route exact path="/highlights" render={() => {
            return <VideoContainer /> 
          }}/> */}
        </Switch>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
