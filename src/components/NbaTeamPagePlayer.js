import React, {Component} from 'react'
import { Card, Image, Icon, Button, Modal, Header } from 'semantic-ui-react'

class NbaTeamPagePlayer extends Component {
    state = {
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render(){
        const {birthdate, college, full_name, height, jersey_number, league, player_image, weight, team_draft_id, position} = this.props.player
        return(
            <div>
                <Card onClick={this.handleOpen}>
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
                    </Card.Content>
                </Card>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}>
                <Modal.Header>Player Details</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='medium' src={player_image} />
                    <Modal.Description>
                        <Header>{full_name} {jersey_number}</Header>
                        <p>College: {college}</p>
                        {/* <p>Position: {position}</p> */}
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Birthdate: {birthdate}</p>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}

export default NbaTeamPagePlayer