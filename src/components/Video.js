import React from 'react'

class Video extends React.Component{
    // state = {

    // }

    render(){
        let url = "https://www.youtube.come/watch?v="
        return(
            <div>
                {/* https://www.googleapis.com/youtube/v3/search?/key=AIzaSyCQUDBxvd0_4aiLgI0w6zFa8QDO1wjQM0w&channelId=UCVSSpcmZD2PwPBqb8yKQKBA&part=snippet,id&order=date&maxResults=20 */}
                <h4>{this.props.video.snippet.channelTitle}</h4>
                <img src={this.props.video.snippet.thumbnails.default.url} ></img>
                {/* <Youtube src={url + this.props.video.id.videoId} ></Youtube> */}
                {/* <Grid.Row>
                    {this.state.news.map(article => {
                    return article.urlToImage !== null && article.content !== "" && article.urlToImage !== "https://a1.espncdn.com/combiner/i?img=%2Fi%2Fespn%2Fespn_logos%2Fespn_red.png" || article.urlToImage.split("").slice(article.urlToImage.length - 3).join("") !== "png" ?
                    <Grid.Row columns={2}>
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
                    </Grid.Row> */}
            </div>
        )
    }
}

export default Video