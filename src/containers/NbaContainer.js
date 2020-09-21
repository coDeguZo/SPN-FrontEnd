import React from 'react'
import { Link } from 'react-router-dom'
import {Grid, Image, Segment, Button} from 'semantic-ui-react'
import Carousel from 'react-bootstrap/Carousel'
class NbaContainer extends React.Component {
    state = {
        news: [],
        playerNews: []
    }

    componentDidMount(){
        fetch(`https://spn-backend2.herokuapp.com/home_news`)
        .then(resp => resp.json())
        .then(data => {
            this.setState({ news: data })
        })
    }

    render(){
        // var item = this.state.news[Math.floor(Math.random() * this.state.news.length)];
        let news = this.state.news.slice(Math.max(this.state.news.length - 3, 3))
        // debugger
        return (
            <div className="nba-container">
                 <Segment>
                    <h1 className="spn-nba-news">NBA<img alt="nba" src={this.props.league.logo_img} className="nba-image"></img> News</h1>
                    {/* <Image src={process.env.PUBLIC_URL + '/SPN.png'} centered className="spn-daily-news"/> */}
                </Segment>
                <Grid divided='vertically'>
                    <Grid.Row columns={2}>
                        {/* <Grid.Column width={5}>
                            <Image src={this.props.league.logo_img} />
                        </Grid.Column> */}
                        <Grid.Column >
                            <h1 className="top-story-headline-home"> <strong>NBA News Stories</strong> </h1>
                            <hr className="dividers hr-md-left-0"/>
                        <Carousel interval={6000} className="nba-carousel-item">
                        {this.state.news.map(article => (
                            article.url_to_image !== null ?
                            <Carousel.Item>
                                    <img
                                    // className="d-block w-100"
                                    src={article.url_to_image}
                                    alt="First slide"
                                    className="nba-container-carousel"
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
                            {/* <div>
                            <h1 className="spn-daily-news">ⓈⓅⓃ NBA News</h1>
                            </div> */}
                            <Segment>
                            <h4 className="top-story-headline-home"> <strong>Top Stories</strong> </h4>
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
                    {/* Team Players */}
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <h1>Top NBA Players</h1>
                            <br />
                            <Grid /*divided='horizontally'*/ centered>
                                   <Grid.Row columns={3}>
                            {this.props.players.map(player => {
                                // debugger
                               return player.full_name === "Carmelo Anthony" || player.full_name === "Zion Williamson" || player.full_name === "Anthony Davis" || player.full_name === "LeBron James" || player.full_name === "Damian Lillard" ? 
                                        <div>
                                            <img alt="player" src={player.player_image}></img>
                                            <h3>{player.full_name}</h3>
                                        </div>
                                : 
                                null
                            })}
                            </Grid.Row>
                            <div><Link to='nba/players'><Button>Click For All Players</Button></Link></div>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={1}>
                        {/* Second Table */}
                        <Grid.Column>
                            <h1>Top NBA Teams</h1>
                            <br />
                            <Grid /*divided='horizontally'*/ centered>
                                   <Grid.Row columns={3}>
                            {this.props.teams.map(team => {
                                // debugger
                               return team.name === "Lakers" || team.name === "Pelicans" || team.name === "Bucks" || team.name === "Clippers" || team.name === "Rockets" ? 
                                        <div>
                                            <img alt="team" className="nba-team-logo-nba-container" src={team.image}></img>
                                            <h3>{team.name}</h3>
                                        </div>
                                : 
                                null
                            })}
                            </Grid.Row>
                            <div><Link to='nba/teams'><Button>Click For All Teams</Button></Link></div>
                            </Grid>
                        </Grid.Column>
                    </Grid.Row>
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
                                <th scope="row">Bucks</th>
                                <td>53</td>
                                <td>12</td>
                                <td>.815</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <th scope="row">Raptors</th>
                                <td>46</td>
                                <td>18</td>
                                <td>.719</td>
                                <td>2</td>
                                </tr>
                                <tr>
                                <th scope="row">Celtics</th>
                                <td>43</td>
                                <td>21</td>
                                <td>.672</td>
                                <td>3</td>
                                </tr>
                                <tr>
                                <th scope="row">Heat</th>
                                <td>41</td>
                                <td>24</td>
                                <td>.631</td>
                                <td>4</td>
                                </tr>
                                <tr>
                                <th scope="row">Pacers</th>
                                <td>39</td>
                                <td>26</td>
                                <td>.600</td>
                                <td>5</td>
                                </tr>
                                <tr>
                                <th scope="row">76ers</th>
                                <td>39</td>
                                <td>26</td>
                                <td>.600</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <th scope="row">Nets</th>
                                <td>30</td>
                                <td>34</td>
                                <td>.469</td>
                                <td>7</td>
                                </tr>
                                <tr>
                                <th scope="row">Magic</th>
                                <td>30</td>
                                <td>35</td>
                                <td>.462</td>
                                <td>8</td>
                                </tr>
                                <tr>
                                <th scope="row">Wizards</th>
                                <td>24</td>
                                <td>40</td>
                                <td>.375</td>
                                <td>9</td>
                                </tr>
                                <tr>
                                <th scope="row">Hornets</th>
                                <td>23</td>
                                <td>42</td>
                                <td>.354</td>
                                <td>10</td>
                                </tr>
                                <tr>
                                <th scope="row">Bulls</th>
                                <td>22</td>
                                <td>43</td>
                                <td>.338</td>
                                <td>11</td>
                                </tr>
                                <tr>
                                <th scope="row">Knicks</th>
                                <td>21</td>
                                <td>45</td>
                                <td>.318</td>
                                <td>12</td>
                                </tr>
                                <tr>
                                <th scope="row">Pistons</th>
                                <td>20</td>
                                <td>46</td>
                                <td>.303</td>
                                <td>13</td>
                                </tr>
                                <tr>
                                <th scope="row">Hawks</th>
                                <td>20</td>
                                <td>47</td>
                                <td>.299</td>
                                <td>14</td>
                                </tr>
                                <tr>
                                <th scope="row">Cavaliers</th>
                                <td>19</td>
                                <td>46</td>
                                <td>.292</td>
                                <td>15</td>
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
                                <th scope="row">Lakers</th>
                                <td>49</td>
                                <td>14</td>
                                <td>.778</td>
                                <td>1</td>
                                </tr>
                                <tr>
                                <th scope="row">Clippers</th>
                                <td>44</td>
                                <td>20</td>
                                <td>.688</td>
                                <td>2</td>
                                </tr>
                                <tr>
                                <th scope="row">Nuggets</th>
                                <td>43</td>
                                <td>22</td>
                                <td>.662</td>
                                <td>3</td>
                                </tr>
                                <tr>
                                <th scope="row">Jazz</th>
                                <td>41</td>
                                <td>23</td>
                                <td>.641</td>
                                <td>4</td>
                                </tr>
                                <tr>
                                <th scope="row">Thunder</th>
                                <td>40</td>
                                <td>24</td>
                                <td>.625</td>
                                <td>5</td>
                                </tr>
                                <tr>
                                <th scope="row">Rockets</th>
                                <td>40</td>
                                <td>24</td>
                                <td>.625</td>
                                <td>6</td>
                                </tr>
                                <tr>
                                <th scope="row">Mavericks</th>
                                <td>40</td>
                                <td>27</td>
                                <td>.597</td>
                                <td>7</td>
                                </tr>
                                <tr>
                                <th scope="row">Grizzlies</th>
                                <td>32</td>
                                <td>33</td>
                                <td>.492</td>
                                <td>8</td>
                                </tr>
                                <tr>
                                <th scope="row">Blazers</th>
                                <td>29</td>
                                <td>37</td>
                                <td>.439</td>
                                <td>9</td>
                                </tr>
                                <tr>
                                <th scope="row">Pelicans</th>
                                <td>28</td>
                                <td>36</td>
                                <td>.438</td>
                                <td>10</td>
                                </tr>
                                <tr>
                                <th scope="row">Kings</th>
                                <td>28</td>
                                <td>36</td>
                                <td>.438</td>
                                <td>11</td>
                                </tr>
                                <tr>
                                <th scope="row">Spurs</th>
                                <td>27</td>
                                <td>36</td>
                                <td>.429</td>
                                <td>12</td>
                                </tr>
                                <tr>
                                <th scope="row">Suns</th>
                                <td>26</td>
                                <td>39</td>
                                <td>.400</td>
                                <td>13</td>
                                </tr>
                                <tr>
                                <th scope="row">Timberwolves</th>
                                <td>19</td>
                                <td>45</td>
                                <td>.297</td>
                                <td>14</td>
                                </tr>
                                <tr>
                                <th scope="row">Warriors</th>
                                <td>15</td>
                                <td>50</td>
                                <td>.231</td>
                                <td>15</td>
                                </tr>
                            </tbody>
                            </table>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default NbaContainer