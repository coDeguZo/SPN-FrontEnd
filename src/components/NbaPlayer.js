import React from 'react'
import { Card, Image, Button, Header, Modal } from 'semantic-ui-react'

class NbaPlayer extends React.Component {

    render(){
        const {full_name, player_image, college, height, weight, position, jersey_number, birthdate} = this.props.player
        return(
            <div>
                <Card onClick>
                    <Image src={player_image} wrapped ui={false}/>
                    <Card.Content>
                        <Card.Header>{full_name} {jersey_number}</Card.Header>
                    <Card.Meta>
                        <span className='date'>NBA Team: {this.props.player.team.name}</span>
                    </Card.Meta>
                    <Card.Description>
                        Position: {position}
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                    <a>
                    <Button>Follow Player</Button>
                    </a>
                    </Card.Content>
                </Card>
                <Modal trigger={<Button>Show Player Details</Button>}>
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
                    </Modal.Content>
                </Modal>
            </div>
        )
    }
}
export default NbaPlayer