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
        modalEditOpen: false,
        modalDeleteOpen: false
    }

    changeProfileInfoState = (event) => {
        this.setState({ [event.target.id]: event.target.value })
    }

    handleEditOpen = () => this.setState({ modalEditOpen: true })
    handleEditClose = () => this.setState({ modalEditOpen: false })
    handleDeleteOpen = () => this.setState({ modalDeleteOpen: true })
    handleDeleteClose = () => this.setState({ modalDeleteOpen: false })

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
                            <Segment style={{position: "fixed"}}>
                                <Card centered="true" fluid="true" raised="false">
                                    <Image src={this.props.user.image} wrapped ui={false} className="profile-user-image"/>
                                    <Card.Content>
                                    <Card.Header>{this.props.user.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{this.props.user.email}</span>
                                    </Card.Meta>
                                    <Card.Description>
                                        {this.props.user.name} loves playing basketball and soccer.
                                    </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                    </Card.Content>
                                    {/* Edit Profile */}
                                    <Modal 
                                    trigger={<button type="button" class="btn btn-outline-success" id="profile-button" onClick={this.handleEditOpen} >Edit Profile</button>}
                                    open={this.state.modalEditOpen}
                                    onClose={this.handleEditClose}
                                    centered={true}
                                    >
                                        <Modal.Header>Select a Photo</Modal.Header>
                                        <Modal.Content image>
                                        {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png'/> */}
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
                                    {/* Delete Profile */}
                                    <Modal 
                                    trigger={<button type="button" class="btn btn-outline-danger" id="profile-button" onClick={this.handleDeleteOpen} >Delete Profile</button>}
                                    open={this.state.modalDeleteOpen}
                                    onClose={this.handleDeleteClose}
                                    centered={true}
                                    >
                                        <Modal.Header>Delete Profile</Modal.Header>
                                        <Modal.Content>
                                        <p>
                                            Are you sure you want to delete your profile?  We'll be sad to see you go!
                                        </p>
                                        </Modal.Content>
                                        <Modal.Actions>
                                        <Button onClick={this.handleDeleteClose} color='red'>
                                            <Icon name='remove' /> No
                                        </Button>
                                        <Button onClick={this.props.deleteProfile} color='green'>
                                            <Icon name='checkmark' /> Yes
                                        </Button>
                                        </Modal.Actions>
                                    </Modal>
                                </Card>
                            </Segment>
                    </Grid.Column>
                    <Grid.Column> 
                    <br />
                    <h1>Favorite Players</h1>
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
                        <br />
                        <h1>Favorite Teams</h1>
                        {this.props.favTeams.map(user_team => (
                        <Card key={user_team.id} centered="true">
                            <Card.Content>
                            <Image
                                // floated='center'
                                size='small'
                                src={user_team.team.image}
                            />
                            <Card.Header>{user_team.team.name}</Card.Header>
                            <Card.Description>
                                <p>Venue: {user_team.team.venue}</p>
                                <p>League: {user_team.team.market}</p>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content>
                            <div className='ui two buttons'>
                                <Button basic color='red' onClick={() => this.props.deleteTeam(parseInt(user_team.id))}>
                                Unfavorite
                                </Button>
                            </div>
                            </Card.Content>
                        </Card>
                        ))}
                    </Grid.Column>
                    </Grid.Row>
              </Grid>
            </div>
        )
    }
}

export default Profile 