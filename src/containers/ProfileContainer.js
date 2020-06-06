import React, {Component} from 'react'
import {Grid, Image, Icon, Button, Card, Segment, Sticky, Rail} from 'semantic-ui-react'
// import Card from 'react-bootstrap/Card'

class Profile extends Component{

    render(){
        return(
            <div>
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                    <Grid.Column className="profile-user-card">
                    <Sticky active="true">
                            <Segment>
                                <Card centered="true" fluid="true" raised="false">
                                    <Image src={this.props.user.image} wrapped ui={false}/>
                                    <Card.Content>
                                    <Card.Header>{this.props.user.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{this.props.user.email}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        Matthew is a musician living in Nashville.
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                                    </a>
                                    </Card.Content>
                                </Card>
                            </Segment>
                        </Sticky>
                    </Grid.Column>
                    <Grid.Column>
                    Favorite Leagues: 
                    <br />
                    Favorite Players:
                    {this.props.favsPlayers.map(user_player => (
                        <Card centered="true">
                            <Card.Content>
                            <Image
                                floated='right'
                                size='small'
                                src={user_player.player.player_image}
                            />
                            <Card.Header>{user_player.player.full_name}</Card.Header>
                            <Card.Meta>{user_player.player.jersey_number}</Card.Meta>
                            <Card.Meta>{user_player.player.team.name}</Card.Meta>
                            <Card.Description>
                                <p>Position: {user_player.player.position}</p>
                                <p>League: {user_player.player.league}</p>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content>
                            <div className='ui two buttons'>
                                <Button basic color='red' onClick={() => this.props.delete(parseInt(user_player.id))}>
                                Unfavorite
                                </Button>
                            </div>
                            </Card.Content>
                        </Card>
                        ))}
                    </Grid.Column>
                    <Grid.Column>
                    Fantasy Team:  
                    </Grid.Column>
                    </Grid.Row>
              </Grid>
            </div>
        )
    }
}

export default Profile 