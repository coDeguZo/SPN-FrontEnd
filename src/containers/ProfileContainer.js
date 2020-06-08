import React, {Component} from 'react'
import {Grid, Image, Icon, Button, Card, Segment, Sticky, Modal, Header, Form} from 'semantic-ui-react'
// import Card from 'react-bootstrap/Card'
import swal from 'sweetalert';

class Profile extends Component{
    state = {
        name: "",
        email: "",
        image: "",
        password: "",
        modalOpen: false
    }

    changeProfileInfoState = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    newProfileInfo = (event) => {
        event.preventDefault()
        const obj = {
            name: this.state.name,
            email: this.state.email,
            image: this.state.image
        }
        // debugger
        fetch(`http://localhost:3000/users/${this.props.user.id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
          // debugger
          this.props.edit(data)})
          this.setState({ modalOpen: false })
          swal({
            icon: "success",
            text: "Profile Updated!"
        })
    }

    render(){
        return(
            <div className="profile">
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
                                        {this.props.user.name} is a musician living in Nashville.
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    <a>
                                        <Icon name='user' />
                                        22 Friends
                                    </a>
                                    </Card.Content>
                                    <Modal 
                                    trigger={<Button onClick={this.handleOpen} >Edit Profile</Button>}
                                    open={this.state.modalOpen}
                                    onClose={this.handleClose}
                                    >
                                        <Modal.Header>Select a Photo</Modal.Header>
                                        <Modal.Content image>
                                        <Image wrapped size='medium' src='/images/avatar/large/rachel.png'/>
                                        <Modal.Description>
                                            <Header>Edit Profile Information</Header>
                                            <Form
                                            onSubmit={this.newProfileInfo}
                                            >
                                                <Form.Field>
                                                <label>Full Name</label>
                                                <input id="name" placeholder='Full Name' onChange={this.changeProfileInfoState} required/>
                                                </Form.Field>
                                                <Form.Field>
                                                <label>Email</label>
                                                <input id="email" placeholder='Email' onChange={this.changeProfileInfoState} required/>
                                                </Form.Field>
                                                <Form.Field>
                                                <label>Profile Image</label>
                                                <input id="image" placeholder='Profile Image' onChange={this.changeProfileInfoState} required/>
                                                </Form.Field>
                                                {/* <Form.Field>
                                                <label>Password</label>
                                                <input id="password" placeholder='Password' onChange={this.changeProfileInfo} required/>
                                                </Form.Field> */}
                                                <Button type='submit'>Submit</Button>
                                            </Form>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                </Card>
                            </Segment>
                        </Sticky>
                    </Grid.Column>
                    <Grid.Column>
                    Favorite Leagues: 
                    <br />
                    Favorite Players:
                    {this.props.favsPlayers.map(user_player => (
                        <Card key={user_player.id} centered="true">
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