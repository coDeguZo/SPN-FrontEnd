import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Image} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
class NbaContainer extends React.Component {
    state = {
        news: []
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
                    <Grid.Row columns={1}>
                    <Grid.Column >
                    <Carousel interval={6000} >
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
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            Standings
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