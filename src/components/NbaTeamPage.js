import React from 'react'
import {Segment, Grid, Image, Dimmer, Loader} from 'semantic-ui-react'
import NbaTeamPagePlayer from './NbaTeamPagePlayer.js'

export default class NbaTeamPage extends React.Component {
    state = {
        teamNews: [],
        filteredNews: [],
        articles: [],
        loaded: false
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?domains=nba.com&pageSize=100&apiKey=0a224130cb72441e9926c7aa16abcfe1")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ teamNews: data.articles, loaded: true })
        })

        // fetch("https://www.nba.com/cavaliers/news")
        // .then(resp => resp.json())
        // .then(data => {
        //     debugger
        // })
        fetch(`http://localhost:3000/teams/${this.props.team.id}`, {
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
            // debugger
            this.setState({articles: data.articles})}
            )
    }

    // teamNewss = () => {
    //     let filter = this.state.teamNews.filter(news => {
    //         // debugger
    //         let pie = news.content.includes(this.props.team.name)
    //         return pie
    //     })
    //     this.setState({ filteredNews: filter })
    // }

    render(){
        const {id, image, market, name, sport_title, venue} = this.props.team
        return(
            <div>
                {this.state.loaded && this.state.articles.length > 0 ?
                <>
                 <Segment>
                    <h1 className="spn-daily-news">{name}<img src={image} className="nba-image"></img> Team Page</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                <h1>{name} News</h1>
                <br /><br /><br />
                <Grid>
                {this.state.articles.map(article => {
                return (<Grid.Row columns={2}>
                     <Grid.Column width={6} centered>
                        <Image src={"https://www.rotoworld.com/" + article.image} centered/>
                        <h4>{article.header}</h4>
                        <p>{article.headline} </p>
                     </Grid.Column>
                     <Grid.Column width={10}>
                        <br /><br />
                        {article.body}
                     </Grid.Column>
                 </Grid.Row>)
                })}
                </Grid>
                <br /><br /><br /><br /><br />
                <Grid relaxed='very' columns={5}>
                {this.props.team.players.map(player => {
                    return (
                        <Grid.Column>
                            <NbaTeamPagePlayer player={player} key={player.id}/>
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