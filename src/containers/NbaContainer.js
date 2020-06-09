import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Image, Table, Segment, Header} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
class NbaContainer extends React.Component {
    state = {
        news: [],
        playerNews: []
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?domains=nba.com&pageSize=20&apiKey=0a224130cb72441e9926c7aa16abcfe1")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ news: data.articles })
        })
    }

    render(){
        return(
            <div>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column width={5}>
                            <Image src={this.props.league.logo_img} />
                        </Grid.Column>
                        <Grid.Column >
                        <Carousel interval={6000} className="nba-carousel-item">
                        {this.state.news.map(article => (
                            article.urlToImage !== null ?
                            <Carousel.Item>
                                    <img
                                    className="d-block w-100"
                                    src={article.urlToImage}
                                    alt="First slide"
                                    className="nba-container-carousel"
                                    />
                                    <Carousel.Caption>
                                        <h3>{article.title}</h3>
                                        <p>{article.content}</p>
                                        <button>Read More</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                :
                                null
                            ))}
                            </Carousel>
                        </Grid.Column>
                    </Grid.Row>
                    {/* NBA Teams */}
                    <Grid.Row columns={5}>
                        {this.props.teams.map(team => {
                            return <Grid.Column>
                                <h4>{team.name}</h4>
                                <img src={team.image} className="nba-home-logo"></img>
                            </Grid.Column>
                        })}
                    </Grid.Row>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <h1>Standings</h1>
                            <Table basic='very'>
                                <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>Employee</Table.HeaderCell>
                                    <Table.HeaderCell>Correct Guesses</Table.HeaderCell>
                                </Table.Row>
                                </Table.Header>

                                <Table.Body>
                                <Table.Row>
                                    <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                                        <Header.Content>
                                        Lena
                                        <Header.Subheader>Human Resources</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    </Table.Cell>
                                    <Table.Cell>22</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
                                        <Header.Content>
                                        Matthew
                                        <Header.Subheader>Fabric Design</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    </Table.Cell>
                                    <Table.Cell>15</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
                                        <Header.Content>
                                        Lindsay
                                        <Header.Subheader>Entertainment</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    </Table.Cell>
                                    <Table.Cell>12</Table.Cell>
                                </Table.Row>
                                <Table.Row>
                                    <Table.Cell>
                                    <Header as='h4' image>
                                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                                        <Header.Content>
                                        Mark
                                        <Header.Subheader>Executive</Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                    </Table.Cell>
                                    <Table.Cell>11</Table.Cell>
                                </Table.Row>
                                </Table.Body>
                            </Table>
                        </Grid.Column>
                        <Grid.Column>
                            <h1>Standout Players</h1>
                            <div><Link to='nba/players'><button>Click For All Players</button></Link></div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default NbaContainer