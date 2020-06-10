import React from 'react'
import { Grid, Search, Dropdown } from 'semantic-ui-react'
import NbaTeam from './NbaTeam'

export default class NbaTeams extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div>
                <h1>NBA teams</h1>
                <img src="https://i0.wp.com/textlists.info/wp-content/uploads/nba.jpg?fit=700%2C330&ssl=1"></img>
                <br />
                {/* <img src={this.props.league.logo_img} alt="logo"/> */}
                <Grid relaxed='very' columns={5}>
                {this.props.teams.map(team => {
                    return (
                        <Grid.Column>
                            <NbaTeam team={team} key={team.id} favoriteTeam={this.props.favs}/>
                        </Grid.Column>
                    )
                })}
                </Grid>
            </div>
        )
    }
}
