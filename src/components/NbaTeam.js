import React from 'react'
import { Card, Image, Button, Header, Modal, Icon } from 'semantic-ui-react'

export default class NbaTeam extends React.Component{ 
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
                {/* <Modal 
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
                    </Modal.Content>
                </Modal> */}
            </div>
        )
    }
}