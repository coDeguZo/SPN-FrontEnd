import React from 'react'
import {Segment, Grid, Image, Loader} from 'semantic-ui-react'
import NbaTeamPagePlayer from './NbaTeamPagePlayer.js'
import Carousel from 'react-bootstrap/Carousel'

export default class NbaTeamPage extends React.Component {
    state = {
        teamNews: [],
        filteredNews: [],
        articles: [],
        loaded: false,
        nbaNews: []
    }

    componentDidMount(){
        fetch(`https://spn-backend2.herokuapp.com/home_news`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({ teamNews: data, loaded: true })
        })

        fetch(`https://spn-backend2.herokuapp.com/teams/${this.props.team.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                "league": 'NBA'
            })
        })
        .then(resp => resp.json())
        .then(data => {
            this.setState({articles: data})}
            )

        fetch(`https://spn-backend2.herokuapp.com/home_news`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({ nbaNews: data })
        })
    }

    render(){
        let news = this.state.nbaNews.slice(Math.max(this.state.nbaNews.length - 2, 2))
        const {image, market, name, venue} = this.props.team
        return(
            <div className="nba-team-page">
                {/* Webscraped Articles */}
                {this.state.loaded && this.state.articles.length > 0 ?
                <>
                 <Segment>
                    <h1 className="spn-daily-news">{name}<img alt="nba" src={image} className="nba-image"></img> Team Page</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                {/* Carousal For NBA News */}
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        <Grid.Column >
                        <Carousel interval={6000} className="nba-page-carousel-item">
                        {this.state.nbaNews.map(article => (
                            article.url_to_image !== null ?
                            <Carousel.Item>
                                    <img
                                    // className="d-block w-100"
                                    src={article.url_to_image}
                                    alt="First slide"
                                    className="nba-page-carousel"
                                    />
                                    <Carousel.Caption>
                                        <h3>{article.title}</h3>
                                        <p>{article.description}</p>
                                        <button onClick={() => window.open(article.url)}>Read More</button>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                :
                                null
                            ))}
                            </Carousel>
                        </Grid.Column>
                        <Grid.Column>
                            <Segment>
                            <h4 className="top-story-headline-home"> <strong>Stories Around The League</strong> </h4>
                            <hr className="dividers hr-md-left-0"/>
                                <Grid>
                                    {news.map(article => 
                                    // article.urlToImage.split("").slice(article.urlToImage.length - 3).join("") !== "png" ? 
                                    <Grid.Row>
                                        <Grid.Column>
                                            <h4><strong>{article.title}</strong></h4>
                                            <Image src={article.url_to_image} size="small" className="daily-news-image" centered="true" onClick={() => window.open(article.url)}/>
                                            <p>{article.description}</p>
                                            <hr className="divider hr-md-left-0"/>
                                        </Grid.Column>
                                    </Grid.Row>
                                    // :
                                    // null
                                    )}
                                </Grid>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Segment className="team-page-segment" style={{backgroundColor: "crimson"}}> 
                    <Image src={image} size="medium" centered/>
                </Segment>
                {/* <br /><br /> */}
                <Grid>
                {this.state.articles.map(article => {
                return (<Grid.Row columns={2} divided>
                     <Grid.Column width={6} centered>
                         <Segment centered>
                            <Image src={"https://www.rotoworld.com/" + article.image} centered/>
                            <h4>{article.header}</h4>
                        </Segment>
                     </Grid.Column>
                     <Grid.Column width={10}>
                        {/* <br /><br /> */}
                        <Segment>
                            <h4> <u><strong>{article.headline}</strong></u> </h4>
                            {article.body}
                        </Segment>
                     </Grid.Column>
                     <hr className="dividers hr-md-left-0"/> 
                 </Grid.Row>)
                })}
                </Grid>
                {/* <br /><br /> */}
                <Segment style={{backgroundColor: "crimson"}}>
                    <Grid>
                        <Grid.Row columns={5} centered divided>
                            <Grid.Column>
                                <br />
                                <h1 style={{fontFamily: "Impact"}}>{venue}</h1>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={image} size="tiny" centered/>
                            </Grid.Column>
                            <Grid.Column>
                                <br />
                                <h1 style={{fontFamily: "Impact"}}> {name}</h1>
                            </Grid.Column>
                            <Grid.Column>
                                <Image src={image} size="tiny" centered/>
                            </Grid.Column>
                            <Grid.Column>
                                <br />
                                <h1 style={{fontFamily: "Impact"}}>{market}</h1>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                {/* <Image src={image} size="tiny" centered/>
                <p>Venue: {venue}</p>
                <p>Market: {market}</p> */}
                </Segment>
                <Grid relaxed='very' columns={5}>
                {this.props.team.players.map(player => {
                    return (
                        <Grid.Column centered>
                            <Segment style={{background: `url(${image})`}}>
                                <NbaTeamPagePlayer player={player} key={player.id}/>
                            </Segment>
                        </Grid.Column>
                    )   
                })}
                </Grid>
                </>
               :
                 <div>
                    <Loader size="massive" active indeterminate fluid className="loader-nba-page">Preparing Team Information</Loader>
                    <Image src='https://media.giphy.com/media/3o7b9DuZqNl0Aw2D1S/giphy.gif' fluid/>
                </div>
               }
            </div>
        )
    }
}