import React, {Component} from 'react'
import {Grid, Image, Icon, Button, Card, Segment, Modal, Header, Form} from 'semantic-ui-react'
// import Card from 'react-bootstrap/Card'
import Bookmarks from '../components/Bookmarks'
import swal from 'sweetalert';

class Profile extends Component{
    state = {
        name: this.props.user.name,
        email: this.props.user.email,
        image: this.props.user.image,
        password: "",
        modalEditOpen: false,
        modalDeleteOpen: false,
        bookmarks: []
    }

    componentDidMount(){
        fetch("https://spn-backend2.herokuapp.com/user_bookmarks")
        .then(resp => resp.json())
        .then(data => {
          let filtered = data.filter(bookmark => bookmark.user.id === this.props.user.id)
          this.setState({bookmarks: filtered})
        })
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
        fetch(`https://spn-backend2.herokuapp.com/users/${this.props.user.id}`, {
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

    deleteBookmark = (title) => {
        if (this.props.user !== null){
            swal({
                icon: "info",
                text: "Article No Longer Bookmarked"
            })
            const article = this.state.bookmarks.find(article => article.title === title)
            fetch(`https://spn-backend2.herokuapp.com/user_bookmarks/${article.id}`, {
                method: "DELETE"
            })
            .then(resp => resp.json())
            .then(data => {
                let filtered = this.state.bookmarks.filter(bookmark => bookmark.title !== title)
                this.setState({ bookmarks: filtered })
                swal({
                    icon: "info",
                    text: "Article No Longer Bookmarked"
                })
            })
        } else {
            swal({
                icon: "info",
                text: "Must Be Signed In To Bookmark Article!"
            })
        }
    }


    render(){
        return (
            <div className="profile profile-background">
                <Grid columns={3} divided>
                    <Grid.Row stretched>
                    <Grid.Column className="profile-user-card">
                            <Segment style={{position: "fixed", zIndex:10}}>
                                <Card className="profile-edit-button" centered={true} fluid={true} raised={false}>
                                    <img alt="profile" src={this.props.user.image} wrapped='false' className="profile-user-image"/>
                                    <Card.Content>
                                    <Card.Header>{this.props.user.name}</Card.Header>
                                    <Card.Meta>
                                        <span className='date'>{this.props.user.email}</span>
                                    </Card.Meta>
                                    {/* <Card.Description>
                                        {this.props.user.name} loves playing basketball and soccer.
                                    </Card.Description> */}
                                    </Card.Content>
                                    <Card.Content extra>
                                    </Card.Content>
                                    {/* Edit Profile */}
                                    <Modal 
                                    trigger={<button type="button" className="btn btn-outline-success" id="profile-button" onClick={this.handleEditOpen} >Edit Profile</button>}
                                    open={this.state.modalEditOpen}
                                    onClose={this.handleEditClose}
                                    centered={true}
                                    >
                                        <Modal.Content>
                                        <Modal.Description>
                                            <Header>Edit Profile Information</Header>
                                            <Form
                                            onSubmit={this.newProfileInfo}
                                            >
                                                <Form.Field>
                                                <label>Full Name</label>
                                                <input id="name" defaultValue={this.state.name} placeholder='Full Name' onChange={this.changeProfileInfoState} required/>
                                                </Form.Field>
                                                <Form.Field>
                                                <label>Email</label>
                                                <input id="email" defaultValue={this.state.email} placeholder='Email' onChange={this.changeProfileInfoState} required/>
                                                </Form.Field>
                                                <Form.Field>
                                                <label>Image URL</label>
                                                <input id="image" defaultValue={this.state.image} placeholder='Profile Image' onChange={this.changeProfileInfoState} required/>
                                                </Form.Field>
                                                <Button className="profile-edit-button" type='submit'>Submit</Button>
                                            </Form>
                                        </Modal.Description>
                                        </Modal.Content>
                                    </Modal>
                                    {/* Delete Profile */}
                                    <Modal 
                                    trigger={<button type="button" className="btn btn-outline-danger" id="profile-button" onClick={this.handleDeleteOpen} >Delete Profile</button>}
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
                    {/* Second Column */}
                    <Grid.Column> 
                    {/* <br /> */}
                    <Segment>
                    <h1 style={{fontFamily: "Impact"}}>Favorite Players</h1>
                    {/* Favorite Players Ternary */}
                    {this.props.favsPlayers.length === 0 ?
                    <Card centered={true}>
                    <Card.Content>
                    <Image
                        // floated='center'
                        size='large'
                        src="https://www.ctvnews.ca/polopoly_fs/1.4644391.1571407649!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg"
                    />
                        <Card.Description>
                            <h1 style={{fontFamily: "Impact"}}> No Favorite Players </h1>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content>
                        </Card.Content>
                    </Card>
                    :
                    <div>
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
                    </div>
                    }
                    </Segment>
                    </Grid.Column>
                    <hr className="dividers hr-md-left-0"/>
                    {/* Column Three */}
                    <Grid.Column>
                        {/* <br /> */}
                        <Segment>
                        <h1 style={{fontFamily: "Impact"}}>Favorite Teams</h1>
                        {/* Tenary for Favorite Players Or Not */}
                        {this.props.favTeams.length === 0 ?
                        <Card centered={true}>
                        <Card.Content>
                        <Image
                            // floated='center'
                            size='big'
                            src="https://9b16f79ca967fd0708d1-2713572fef44aa49ec323e813b06d2d9.ssl.cf2.rackcdn.com/1140x_a10-7_cTC/20190108mfpinesports11-10-1548879899.jpg"
                        />
                            <Card.Description>
                                <h1 style={{fontFamily: "Impact"}}> No Favorite Teams </h1>
                            </Card.Description>
                            </Card.Content>
                            <Card.Content>
                            </Card.Content>
                        </Card>
                        :
                        <div>
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
                        </div>
                        }
                     </Segment>
                    </Grid.Column>
                    </Grid.Row>
                    {/* Bookmark Group */}
                    <Grid.Row className="profile-row-bookmarks">
                        <div className="padding-bookmarks">
                            {this.state.bookmarks.length === 0 ?
                            <Segment>
                            <h1 style={{fontFamily: "Impact"}}> <u>Bookmarked Articles</u> </h1>
                            <br />
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column >
                                        <img alt="profile-news" className="profile-news-image" src="https://s.hdnux.com/photos/76/01/54/16259844/3/rawImage.jpg" ></img>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <br />
                                        <br />
                                        <br />
                                        <br />
                                        <h1 style={{fontFamily: "Impact"}}> Empty Gym - No BookMarks</h1>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            </Segment>
                            :
                            <div>
                            {this.state.bookmarks.map(mark => {
                                return(
                                    <div key={mark.id}>
                                        <Bookmarks mark={mark} key={mark.id} unBookmark={this.deleteBookmark}/>
                                    </div>
                                ) 
                            })}
                            </div>
                            }
                        </div>
                    </Grid.Row>
              </Grid>
            </div>
        )
    }
}

export default Profile 