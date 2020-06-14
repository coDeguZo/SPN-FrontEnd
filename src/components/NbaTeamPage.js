import React from 'react'
import {Segment} from 'semantic-ui-react'

export default class NbaTeamPage extends React.Component {
    state = {
        teamNews: [],
        filteredNews: []
    }

    componentDidMount(){
        fetch("https://newsapi.org/v2/everything?domains=nba.com&pageSize=100&apiKey=0a224130cb72441e9926c7aa16abcfe1")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ teamNews: data.articles })
        })

        fetch("https://www.nba.com/cavaliers/news")
        .then(resp => resp.json())
        .then(data => {
            debugger
        })
    }

    teamNewss = () => {
        let filter = this.state.teamNews.filter(news => {
            // debugger
            let pie = news.content.includes(this.props.team.name)
            return pie
        })
        this.setState({ filteredNews: filter })
    }

    render(){
        const {id, image, market, name, sport_title, venue} = this.props.team
        return(
            <div>
                 <Segment>
                    <h1 className="spn-daily-news">{name}<img src={image} className="nba-image"></img> Team Page</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                <h1>This is the {name} Page</h1>
                <button onClick={this.teamNewss} > Click For News </button>
            </div>
        )
    }
}