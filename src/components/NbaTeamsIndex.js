import React from 'react'
import { Grid, Dropdown, Segment } from 'semantic-ui-react'
import NbaTeam from './NbaTeam'

export default class NbaTeams extends React.Component{
    state = {
        dropdownTeam: [],
        filteredTeam: []
    }

    onChangeTeams = (event) => {
        let filter = this.props.teams.filter(team => event.target.textContent === team.name)
        this.setState({ filteredTeam: filter })
        this.setState({ dropdownTeam: event.target.textContent })
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
            <div className="nba-team-index">
                {/* <h1>NBA teams</h1> */}
                <Segment>
                    <h1 className="spn-nba-news">NBA<img src={this.props.league.logo_img} className="nba-image"></img> Teams</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                <Grid relaxed='very' columns={1}>
                    <Grid.Column>
                        <h4>Select Team</h4>
                        <Dropdown placeholder='All Teams' search selection options={teams} onChange={this.onChangeTeams} />
                    </Grid.Column>
                </Grid>
                {/* <img src="https://i0.wp.com/textlists.info/wp-content/uploads/nba.jpg?fit=700%2C330&ssl=1" ></img> */}
                <br /> <br /> <br />
                {/* <img src={this.props.league.logo_img} alt="logo"/> */}
                {this.state.filteredTeam.length === 0 ? 
                <Grid relaxed='very' columns={5}>
                {this.props.teams.map(team => {
                    return (
                        <Grid.Column>
                            <NbaTeam team={team} key={team.id} favoriteTeam={this.props.favs}/>
                        </Grid.Column>
                    )
                })}
                </Grid>
                :
                <Grid relaxed='very' columns={5}>
                {this.state.filteredTeam.map(team => {
                    return (
                        <Grid.Column>
                            <NbaTeam team={team} key={team.id} favoriteTeam={this.props.favs}/>
                        </Grid.Column>
                    )
                })}
                </Grid>
                }
            </div>
        )
    }
}
