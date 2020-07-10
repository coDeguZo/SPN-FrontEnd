import React from 'react'
import {Grid, Image, Segment} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
import HomeNews from '../components/HomeNews'

class Home extends React.Component{
    state = {
        news: [],
        topHeadlines: []
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?domains=espn.com&pageSize=50&apiKey=f44ccf725ca9471596da059a5defc2fc")
        .then(resp => resp.json())
        .then( data => {
            this.setState({ news: data.articles })
        })

        fetch("https://newsapi.org/v2/top-headlines?sources=espn&pageSize=5&apiKey=f44ccf725ca9471596da059a5defc2fc")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ topHeadlines: data.articles })
        })
    }


    render(){
        let news = this.state.topHeadlines.slice(0, 3)
        // console.log(news)
        let homeImage = "home-image"
        return(
            // className="my-carousel"
            <div className="home-page-color">
                <Segment>
                    <h1 className="spn-daily-news">ⓈⓅⓃ Daily News</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                <br />
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
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Curry.jpg'}
                            alt="Second slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Third */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src="https://static01.nyt.com/images/2014/11/23/sports/GIANTS-slide-PAJ0/GIANTS-slide-PAJ0-superJumbo.jpg"
                            alt="third slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Fourth */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Lebron-Shot.jpg'}
                            alt="fourth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Fifth */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Lebron-Wade.jpg'}
                            alt="fifth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Sixth */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Kyrie.jpeg'}
                            alt="sixth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Seventh */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Derrick-Rose.jpg'}
                            alt="seventh slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Eigth */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Lebron.jpg'}
                            alt="eighth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Ninth */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Rings.jpg'}
                            alt="ninth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Tenth */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/MJ-Winning.jpg'}
                            alt="tenth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Eleven */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_1.jpg'}
                            alt="tenth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Twelve */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_2.jpg'}
                            alt="tenth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Thirteen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_3.jpg'}
                            alt="tenth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* FourTeen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_4.jpeg'}
                            alt="tenth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Fifteen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_5.jpeg'}
                            alt="tenth slide"
                            className={homeImage}
                            />
                        </Carousel.Item>
                        {/* Sixteen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_6.png'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Seventeen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_7.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Eighteen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/new_8.jpeg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                        {/* Nineteen */}
                        <Carousel.Item>
                            <img
                            // className="d-block w-100"
                            src={process.env.PUBLIC_URL + '/Dream-Team.jpg'}
                            alt="tenth slide"
                            className="home-image"
                            />
                        </Carousel.Item>
                    </Carousel>
                    </Grid.Column>
                    {/* <Image src="https://dypdvfcjkqkg2.cloudfront.net/large/2579549-3774.png" size="large"/> */}
                    <Grid.Column>
                    <Segment>
                    <h4 className="top-story-headline-home"> <strong>Top Stories</strong> </h4>
                    <hr className="dividers hr-md-left-0"/>
                        <Grid>
                            {news.map(article => 
                            article.urlToImage.split("").slice(article.urlToImage.length - 3).join("") !== "png" ? 
                            <Grid.Row key={article.content}>
                                <Grid.Column>
                                    <h4><strong>{article.title}</strong></h4>
                                    <Image src={article.urlToImage} size="small" className="daily-news-image" onClick={() => window.open(article.url)}/>
                                    <p>{article.description}</p>
                                    <hr className="dividers hr-md-left-0"/>
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
                    return article.urlToImage !== null && article.content !== "" && article.urlToImage !== "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png" && article.urlToImage.split("").slice(article.urlToImage.length - 3).join("") !== "png" ?
                    <Grid.Row key={article.content} columns={2}>
                        <Grid.Column width={6}>
                            <Image className="home-news-image" src={article.urlToImage} />
                            {article.author !== null ? 
                            <p>By: {article.author}</p>
                            :
                            <p>By: Matt Lowry</p>
                            }
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <HomeNews article={article} key={article.title} user={this.props.user}/>
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