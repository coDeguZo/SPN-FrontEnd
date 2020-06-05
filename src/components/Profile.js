import React, {Component} from 'react'
import {Grid, Card, Image, Icon} from 'semantic-ui-react'

class Profile extends Component{
    render(){
        return(
            <div>
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                    <Grid.Column>
                    <Card centered="true" fluid="true">
                        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
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
                    </Grid.Column>
                    <Grid.Column>
                    Favorite Leagues:
                    <br />
                    Favorite Players: 
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
