import React from 'react'
import { Card, Image, Button, Header, Modal, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default class NbaTeam extends React.Component{ 
    state = {
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })


    render(){
        console.log(this.props.team.name)
        const {id, image, market, name, sport_title, venue} = this.props.team
        return(
            <div>
                <Card onClick={this.handleOpen}>
                    <Image src={image} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{name}</Card.Header>
                    <Card.Meta>
                        <span className='date'></span>
                    </Card.Meta>
                    <Card.Description>
                        Location: {market}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                        <Icon name='basketball ball' />
                        League: {sport_title}
                    </a>
                    </Card.Content>
                </Card>
                <Button onClick={() => this.props.favoriteTeam(id, name)}>Follow Team</Button>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}>
                <Modal.Header>Team Details</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='medium' src={image} />
                    <Modal.Description>
                        <Header>{name}</Header>
                        <p>Venue: {venue}</p>
                        <p>Market: {market}</p>
                        <p>League: {sport_title}</p>
                        <Link to={"/nba-team-" + name}> {name} Team Page</Link>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}