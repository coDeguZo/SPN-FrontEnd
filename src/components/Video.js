import React from 'react'
import YouTube from "react-youtube"
import { Grid } from "semantic-ui-react"


class Video extends React.Component{

    render(){
        let opts = {
            height: '390',
            width: '640',
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1
            }}

        const {channelTitle, description, publishedAt} = this.props.video.snippet
        let url = "https://www.youtube.come/watch?v="
        let date = Date.parse(publishedAt)
        let newDate = Date(date).slice(0, 15)
        return(
            <div>
                {/* https://www.googleapis.com/youtube/v3/search?/key=AIzaSyCQUDBxvd0_4aiLgI0w6zFa8QDO1wjQM0w&channelId=UCVSSpcmZD2PwPBqb8yKQKBA&part=snippet,id&order=date&maxResults=20 */}
                {/* <h4>{this.props.video.snippet.channelTitle}</h4> */}
                {/* <img src={this.props.video.snippet.thumbnails.default.url} ></img> */}
                {/* <YouTube videoId={this.props.video.id.videoId} opts /> <YouTube videoId={ytKey} opts={opts} onReady={_onReady} /> */}
                <Grid>
                    <Grid.Row columns={2}>
                        <Grid.Column width={8}>
                            <br />
                            <br />
                            <h1>{channelTitle}</h1>
                            <p>{newDate}</p>
                            <h4 className="grid-video-column-left">{description}</h4>
                            <hr className="dividers hr-md-left-0"/>
                        </Grid.Column>
                        <Grid.Column width={2}>
                            <YouTube videoId={this.props.video.id.videoId} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        )
    }
}

export default Video