import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Image, Table, Segment, Header, GridColumn} from 'semantic-ui-react'
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
            <div className="nba-container">
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
                                        <button onClick={() => window.open(article.url)}>Read More</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                :
                                null
                            ))}
                            </Carousel>
                        </Grid.Column>
                    </Grid.Row>
                    {/* NBA Teams */}
                    {/* <Grid.Row columns={5}>
                        {this.props.teams.map(team => {
                            return <Grid.Column>
                                <h4>{team.name}</h4>
                                <img src={team.image} className="nba-home-logo"></img>
                            </Grid.Column>
                        })}
                    </Grid.Row> */}
                    <Grid.Row columns={2}>
                        {/* Second Table */}
                        <Grid.Column>
                            <h1>East Standings</h1>
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Team</th>
                                <th scope="col">Wins</th>
                                <th scope="col">Losses</th>
                                <th scope="col">Win Percentage</th>
                                <th scope="col">Divison Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                        </Grid.Column>
                        <Grid.Column>
                            <h1>West Standings</h1>
                            <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Team</th>
                                <th scope="col">Wins</th>
                                <th scope="col">Losses</th>
                                <th scope="col">Win Percentage</th>
                                <th scope="col">Divison Rank</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">Rockets</th>
                                <td>40</td>
                                <td>24</td>
                                <td>0.625</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>
                            </tbody>
                            </table>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        {/* Second Table */}
                        <Grid.Column>
                            <h1>Standout Players</h1>
                            <div><Link to='nba/players'><button>Click For All Players</button></Link></div>
                            <br />
                            <Grid divided='horizontally'>
                                   <Grid.Row columns={3}>
                            {this.props.players.map(player => {
                                // debugger
                               return player.full_name === "Carmelo Anthony" || player.full_name === "Zion Williamson" || player.full_name === "Lonzo Ball" ? 
                                        <div>
                                            <img src={player.player_image}></img>
                                            <h3>{player.full_name}</h3>
                                        </div>
                                : 
                                null
                            })}
                            </Grid.Row>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default NbaContainer