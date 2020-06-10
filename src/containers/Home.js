import React from 'react'
import {Grid, Image, Button, Segment} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import { Route, Link } from 'react-router-dom'


class Home extends React.Component{
    state = {
        news: []
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?domains=espn.com&pageSize=50&apiKey=f44ccf725ca9471596da059a5defc2fc")
        .then(resp => resp.json())
        .then( data => {
            this.setState({ news: data.articles })
        })
    }

    render(){
        let news = this.state.news.slice(Math.max(this.state.news.length - 3, 3))
        return(
            // className="my-carousel"
            <div>
                 <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                    <Grid.Column >
                    <Carousel interval={6000} >
                        {/* Second */}
                        <Carousel.Item>
                        {/* <Carousel.Caption>
                                <h3>Second Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption> */}
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Curry.jpg'}
                            alt="Second slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Third */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static01.nyt.com/images/2014/11/23/sports/GIANTS-slide-PAJ0/GIANTS-slide-PAJ0-superJumbo.jpg"
                            alt="third slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Fourth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Lebron-Shot.jpg'}
                            alt="fourth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Fifth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Lebron-Wade.jpg'}
                            alt="fifth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Sixth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Kyrie.jpeg'}
                            alt="sixth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Seventh */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Derrick-Rose.jpg'}
                            alt="seventh slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Eigth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Lebron.jpg'}
                            alt="eighth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Ninth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Rings.jpg'}
                            alt="ninth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Tenth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/MJ-Winning.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Eleven */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_1.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Twelve */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_2.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Thirteen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_3.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* FourTeen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_4.jpeg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Fifteen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_5.jpeg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Sixteen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_6.png'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Seventeen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_7.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Eighteen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_8.jpeg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Nineteen */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Dream-Team.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </Grid.Column>
                    {/* <Image src="https://dypdvfcjkqkg2.cloudfront.net/large/2579549-3774.png" size="large"/> */}
                    <Grid.Column>
                    <div>
                    <h1 className="spn-daily-news">ⓈⓅⓃ Daily News</h1>
                    </div>
                    <Segment>
                        <Grid>
                            {news.map(article => 
                            article.urlToImage.split("").slice(article.urlToImage.length - 3).join("") !== "png" ? 
                            <Grid.Row>
                                <Grid.Column>
                                    <h4><strong>{article.title}</strong></h4>
                                    <Image src={article.urlToImage} size="small" className="daily-news-image" centered="true" onClick={() => window.open(article.url)}/>
                                    <p>{article.description}</p>
                                </Grid.Column>
                            </Grid.Row>
                            :
                            null
                            )}
                        </Grid>
                    </Segment>
                    </Grid.Column>
                    </Grid.Row>
                    {this.state.news.map(article => {
                    return article.urlToImage !== null && article.content !== "" && article.urlToImage !== "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png" || article.urlToImage.split("").slice(article.urlToImage.length - 3).join("") !== "png" ?
                    <Grid.Row columns={2}>
                        <Grid.Column width={6}>
                            <Image className="home-news-image" src={article.urlToImage} />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <br />
                            <br />
                            <br />
                            <br />
                            <h3><strong>{article.title}</strong></h3>
                            <p className="home-news-paragraphs">{article.description}</p>
                            <Button onClick={() => window.open(article.url)}>Read More</Button>
                        </Grid.Column>
                    </Grid.Row>
                    :
                    null
                })}
                </Grid>
            </div>
        )
    }
}

export default Home