import React from 'react';
import './App.css';
import Nav from './components/Nav'
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
    leagues: []
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
      const teams = data.filter(team => +team.league_id === 33)
      this.setState({ Nbateams: teams })
      this.setState({ teams: data })
    })

    fetch("http://localhost:3000/players")
    .then(resp => resp.json())
    .then(data => {
      this.setState({ players: data })
    })

  }

  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/nba" render={ () => <NbaContainer players={this.state.players} teams={this.state.Nbateams}/>} />
          <Route exact path="/nba/players" render={ () => <NbaPlayerIndex players={this.state.players} teams={this.state.Nbateams} league={this.state.nbaLeague}/>} />
        </Switch>
      </div>
    );
  }
}

export default App;
