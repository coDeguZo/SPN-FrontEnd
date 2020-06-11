import React from 'react'
import { Grid, Search, Dropdown, Segment } from 'semantic-ui-react'
import NbaTeam from './NbaTeam'

export default class NbaTeams extends React.Component{
    state = {
        
    }

    render(){
        return(
            <div className="nba-team-index">
                {/* <h1>NBA teams</h1> */}
                <Segment>
                    <h1 className="spn-nba-news">NBA<img src={this.props.league.logo_img} className="nba-image"></img> Teams</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                {/* <img src="https://i0.wp.com/textlists.info/wp-content/uploads/nba.jpg?fit=700%2C330&ssl=1" ></img> */}
                <br /> <br /> <br />
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
