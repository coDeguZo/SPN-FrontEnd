import React from 'react'
import { Segment } from 'semantic-ui-react'
import Video from '../components/Video'

class VideoContainer extends React.Component{
    state = {
        videos: []
    }

    componentDidMount(){
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=espn&maxResults=25&order=date&key=AIzaSyCQUDBxvd0_4aiLgI0w6zFa8QDO1wjQM0w")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ videos: data.items})
        })
    }


    render(){
        return(
            <div>
                <Segment>
                    <h1 className="spn-daily-news">ⓈⓅⓃ Sports Higlights</h1>
                </Segment>
                {this.state.videos.map(video => {
                    return <Video video={video}/>
                })}
            </div>
        )
    }
}

export default VideoContainer