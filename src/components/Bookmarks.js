import React from 'react'
import {Grid, Button, Segment, Icon} from 'semantic-ui-react'
import swal from 'sweetalert';

export default class Bookmarks extends React.Component{
    render(){
        let {urlToImage, author, content, description, title, url, published_at} = this.props.mark
        let date = Date.parse(published_at)
        let newDate = Date(date).slice(0, 15)
        return(
            <div>
                <Segment>
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column >
                            <img className="profile-news-image" src={urlToImage} ></img>
                            {author !== null ? 
                            <p>By:{author}</p>
                            :
                            <p>By: Matt Lowry</p>
                            }
                        </Grid.Column>
                        <Grid.Column>
                            <br />
                            <h3>{title}</h3>
                            <p>{newDate}</p>
                            <p>{description}</p>
                            <div>
                                <Button onClick={() => window.open(url)}>Read More</Button>
                                <Button onClick={() => this.props.unBookmark(title)}><Icon name="bookmark"/>Un-BookMark</Button>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Segment>
            </div>
        )
    }

}