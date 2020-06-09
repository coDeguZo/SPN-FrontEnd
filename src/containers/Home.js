import React from 'react'
import {Grid, Image} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import { Route } from 'react-router-dom'

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
        return(
            <div className="my-carousel">
                {/* <h1>Welcome To SPM</h1> */}
                 <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                    <Grid.Column >
                    <Carousel interval={6000} >
                        {/* First */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://i.ytimg.com/vi/4CX3e93p9y4/maxresdefault.jpg"
                            alt="First slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>First Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Second */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://stillmed.olympic.org/media/Images/OlympicOrg/News/2016/09/23/2016-09-23-bolt-thumbnail.jpg"
                            alt="Second slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Second Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Third */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://static01.nyt.com/images/2014/11/23/sports/GIANTS-slide-PAJ0/GIANTS-slide-PAJ0-superJumbo.jpg"
                            alt="third slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Third Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Fourth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://talksport.com/wp-content/uploads/sites/5/2018/09/GettyImages-987922082.jpg?strip=all&w=960&quality=100"
                            alt="fourth slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Fourth Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Fifth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://pbs.twimg.com/media/D6ajU4-WkAIb8L8.jpg"
                            alt="fifth slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Fifth Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Sixth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://piximus.net/media/30553/the-greatest-sports-illustrated-photographs-ever-14.jpg"
                            alt="sixth slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Sixth Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Seventh */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://bloximages.chicago2.vip.townnews.com/timeswv.com/content/tncms/assets/v3/editorial/c/de/cdeb118b-796e-54f3-9eb7-b5b1eef6926b/53d552b841905.image.jpg"
                            alt="seventh slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Seventh Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Eigth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://ichef.bbci.co.uk/onesport/cps/480/cpsprodpb/A91E/production/_110249234_andymurraywinswimbledon.jpg"
                            alt="eighth slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Eigth Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Ninth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://usatftw.files.wordpress.com/2019/09/gty-1142669861.jpg"
                            alt="ninth slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Ninth Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        {/* Tenth */}
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="https://blogs.coventry.ac.uk/uncovered/wp-content/uploads/sites/7/2016/04/shutterstock_122214214.png"
                            alt="tenth slide"
                            className="home-image"
                            />
                            <Carousel.Caption>
                                <h3>Tenth Slide Label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                <button>This is a test button</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                    </Grid.Column>
                    </Grid.Row>
                    {this.state.news.map(article => {
                    return article.urlToImage !== null && article.content !== "" && article.urlToImage !== "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png" ?
                    <Grid.Row columns={2}>
                        <Grid.Column width={3}>
                            <Image className="home-news-image" src={article.urlToImage} />
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <p>{article.content}</p>
                            <button>Read More</button>
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