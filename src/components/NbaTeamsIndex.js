import React from 'react'
import { Grid, Search, Dropdown } from 'semantic-ui-react'
import NbaTeam from '../components/NbaTeam'

export default class NbaTeams extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div>
                <h1>NBA teams</h1>
                <Grid relaxed='very' columns={3}>
                    <Grid.Column>
                    <Dropdown placeholder='All Teams' search selection onChange={this.onChangeTeams} />
                    </Grid.Column>
                    <Grid.Column>
                        {/* <h1> NBA </h1> */}
                    </Grid.Column>
                    <Grid.Column>
                    <Search onSearchChange={this.onChangeSearch}/>
                    </Grid.Column>
                </Grid>
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
