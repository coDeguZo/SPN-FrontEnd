import React, {Component} from 'react'
import { Card, Image, Icon } from 'semantic-ui-react'

class NbaTeamPagePlayer extends Component {

    render(){
        const {birthdate, college, full_name, height, jersey_number, league, player_image, weight, team_draft_id, position} = this.props.player
        return(
            <div>
                <Card>
                    <Image src={player_image} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{full_name} {jersey_number}</Card.Header>
                    <Card.Meta>
                        <span className='date'></span>
                    </Card.Meta>
                    <Card.Description>
                        Position: {position}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    {/* <a>
                        <Icon name='basketball ball' />
                        NBA Team: {this.props.player.team.name}
                    </a> */}
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

export default NbaTeamPagePlayer