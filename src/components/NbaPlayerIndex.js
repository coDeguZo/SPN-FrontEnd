import React from 'react'
import NbaPlayer from './NbaPlayer'
import { Grid, Search, Dropdown, Segment } from 'semantic-ui-react'
import swal from 'sweetalert';



class NbaPlayerIndex extends React.Component {
    state = {
        players: [],
        dropdownTeam: [],
        searchPlayers: this.props.players,
        filteredPlayers: [],
        search: ""
    }

    componentDidMount(){
        this.setState({ players: this.props.players })
    }

    onChangeTeams = (event) => {
        let filter = this.props.players.filter(player => event.target.textContent === player.team.name)
        this.setState({ filteredPlayers: filter })
        this.setState({ dropdownTeam: event.target.textContent })
    }

    onChangeSearch = (event) => {
        // if (this.state.search.length === 0){
        //     this.setState({ players: this.props.players })
        // } else if (this.state.search.length > 0 && this.state.filteredPlayers.length === 0){
        //     this.setState({ players: filter })
        // } else if (this.state.filteredPlayers > 0){
        //     const filterPlayerss = this.props.filteredPlayers.filter(player => player.full_name.includes(this.state.search))
        //     this.setState({ filteredPlayers: filterPlayerss })
        // }
        if (this.state.filteredPlayers.length === []){
            let filter = this.props.players.filter(player => player.full_name.includes(this.state.search)) 
            this.setState({ players: filter })
            this.setState({ filteredPlayers: filter })
            this.setState({ search: event.target.value })
        } else {
            let filter = this.state.filteredPlayers.filter(player => player.full_name.includes(this.state.search))
            this.setState({ players: filter })
            this.setState({ filteredPlayers: filter })
            this.setState({ search: event.target.value })
        }
    }

    render(){
        const teams = this.props.teams.map(team => ({
            key: team.name,
            text: team.name,
            value: team.name,
        }))
        teams.unshift({
            key: "All Teams",
            text: "All Teams",
            value: "All Teams"
        })
        return(
            <div className="nba-player-index">
                 <Segment>
                    <h1 className="spn-nba-news">NBA<img src={this.props.league.logo_img} className="nba-image"></img> Players</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                <br />
                <Grid relaxed='very' columns={3}>
                    <Grid.Column>
                    <Dropdown placeholder='All Teams' search selection options={teams} onChange={this.onChangeTeams} />
                    </Grid.Column>
                    <Grid.Column>
                        {/* <h1> NBA </h1> */}
                    </Grid.Column>
                    <Grid.Column>
                    <Search onSearchChange={this.onChangeSearch}/>
                    </Grid.Column>
                </Grid>
                {/* <img src={this.props.league.logo_img} alt="logo"/> */}
                {this.state.filteredPlayers.length === 0 ?
                <Grid relaxed='very' columns={5}>
                {this.props.players.map(player => {
                    return (
                        <Grid.Column>
                            <NbaPlayer player={player} playerTwo={this.props.filteredPlayers} key={player.id} favoritePlayer={this.props.favs}/>
                        </Grid.Column>
                    )
                })}
                </Grid>
                :
                <Grid relaxed='very' columns={5}>
                {this.state.filteredPlayers.map(player => {
                    return (
                        <Grid.Column>
                            <NbaPlayer player={player} playerTwo={this.props.filteredPlayers} key={player.id} favoritePlayer={this.props.favs}/>
                        </Grid.Column>
                    )
                })}
                </Grid>
                }
            </div>
        )
    }
}

export default NbaPlayerIndex