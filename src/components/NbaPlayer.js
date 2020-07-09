import React from 'react'
import { Card, Image, Button, Header, Modal, Icon } from 'semantic-ui-react'

class NbaPlayer extends React.Component {
    state = {
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })
    handleClose = () => this.setState({ modalOpen: false })

    render(){
        const {id, full_name, player_image, college, height, weight, position, jersey_number, birthdate} = this.props.player
        return(
            <div>
                <Card onClick={this.handleOpen} className="player-card">
                    <Image src={player_image} wrapped ui={false} className="player-card"/>
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
                    {/* <a> */}
                        <Icon name='basketball ball' />
                        NBA Team: {this.props.player.team.name}
                    {/* </a> */}
                    </Card.Content>
                </Card>
                <Button onClick={() => this.props.favoritePlayer(id, full_name)}>Favorite Player</Button>
                <Modal 
                    open={this.state.modalOpen}
                    onClose={this.handleClose}>
                <Modal.Header>Player Details</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='medium' src={player_image} />
                    <Modal.Description>
                        <Header>{full_name} {jersey_number}</Header>
                        <p>College: {college}</p>
                        <p>Position: {position}</p>
                        <p>Height: {height}</p>
                        <p>Weight: {weight}</p>
                        <p>Birthdate: {birthdate}</p>
                    </Modal.Description>
                    <Modal.Description>
                        <Image centered size="medium" src={this.props.player.team.image}/>
                    </Modal.Description>
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}
export default NbaPlayer