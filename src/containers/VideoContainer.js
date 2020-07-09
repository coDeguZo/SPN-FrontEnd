import React from 'react'
import { Segment, Pagination } from 'semantic-ui-react'
import Video from '../components/Video'

class VideoContainer extends React.Component{
    state = {
        videos: [],
        original: [],
        pageNum: 0
    }

    componentDidMount(){
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=espn&maxResults=10&order=date&key=AIzaSyCQUDBxvd0_4aiLgI0w6zFa8QDO1wjQM0w")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ videos: data.items})
            // this.setState({ original: data })
        })
    }

    // nextPage = (event) => {
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=espn&maxResults=10&${this.state.original.nextPageToken}&order=date&key=AIzaSyCQUDBxvd0_4aiLgI0w6zFa8QDO1wjQM0w`)
    //     .then(resp => resp.json())
    //     .then(data => {
    //         this.setState({videos: data.items})
    //         this.setState({original: data})
    //     })
    // }



    render(){
        return(
            <div className="video-container">
                <Segment>
                    <h1 className="spn-daily-news">ⓈⓅⓃ Media</h1>
                </Segment>
                {this.state.videos.map(video => {
                    return <Video video={video}/>
                })}
                <br /><br />
                <Pagination defaultActivePage={1} totalPages={10} />
                <br /> <br /><br />
            </div>
        )
    }
}

export default VideoContainer