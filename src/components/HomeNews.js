import React from "react"
import {Grid, Button, Image, Icon} from "semantic-ui-react"
import swal from 'sweetalert';

class HomeNews extends React.Component {
    state = {
        userBookmarks: [],
        bookmarked: false,
    }

    // articleBookmarked = (id) => {
    //     // console.log(id)
    //     this.setState({ bookmarked: !this.state.bookmarked})
    //     if (this.state.bookmarked === false){
    //         swal({
    //             icon: "success",
    //             text: "Bookmarked Article"
    //         })
    //     } else {
    //         swal({
    //             icon: "info",
    //             text: "Article No Longer Bookmarked"
    //         })
    //     }
    // }

    componentDidMount(){
        fetch("http://localhost:3000/user_bookmarks")
        .then(resp => resp.json())
        .then(data => {
            this.setState({ userBookmarks: data })
            if (this.props.user !== null){
                this.state.userBookmarks.find(article => {
                    // debugger
                    if (article.title === this.props.article.title && this.props.user.id === parseInt(article.user_id)){
                        this.setState({bookmarked: true})
                 }
            })} 
            else {
               this.setState({bookmarked: false})
            }
        })
    }

    createBookmark = () => {
    
    if (this.props.user !== null){
        if (this.state.bookmarked === false) {
        const obj = {
            author: this.props.article.author,
            content: this.props.article.content,
            description: this.props.article.description,
            published_at: this.props.article.publishedAt,
            title: this.props.article.title,
            url: this.props.article.url,
            urlToImage: this.props.article.urlToImage,
            user_id: this.props.user.id
        }

        fetch("http://localhost:3000/user_bookmarks", {
            method: "POST",
            headers: {"Content-Type": "application/json", "Accept": "application/json"},
            body: JSON.stringify(obj)
        })
        .then(resp => resp.json())
        .then(data => {
        this.setState({ bookmarked: !this.state.bookmarked})
        if (this.state.bookmarked === true){
            swal({
                icon: "success",
                text: "Bookmarked Article"
            })
        } 
        })
    } } else {
        swal({
            icon: "info",
            text: "Must Be Signed In To Bookmark Article!"
        })
    }
    }

    deleteBookmark = (title) => {
        if (this.props.user !== null){
            swal({
                icon: "info",
                text: "Unbookmarking Under Construction"
            })
            // const id = this.state.userBookmarks.find(article => {
            //     if (article.title === title) {
            //         return article.id
            // }})
            //  console.log(id)
            // fetch(`http://localhost:3000/user_bookmarks/${id.id}`, {
            //     method: "DELETE"
            // })
            // .then(resp => resp.json())
            // .then(data => {
            //     this.setState({ bookmarked: !this.state.bookmarked})
            //     swal({
            //         icon: "info",
            //         text: "Article No Longer Bookmarked"
            //     })
            // })
        } else {
            swal({
                icon: "info",
                text: "Must Be Signed In To Bookmark Article!"
            })
        }
    }

    render(){
        const {urlToImage, title, description, url, author} = this.props.article
        return(
            <div>
                    {this.state.bookmarked === false ?
                    <Button floated="right" onClick={this.createBookmark}><Icon name="bookmark outline"/>Bookmark Article</Button>
                    :
                    <Button floated="right" onClick={() => this.deleteBookmark(title)}><Icon name="bookmark"/>Bookmark Article</Button>
                    }
                    <br />
                    <br />
                    <br />
                    <h3><strong>{title}</strong></h3>
                    <p className="home-news-paragraphs">{description}</p>
                    <Button onClick={() => window.open(url)}>Read More</Button>
            </div>
        )
    }
}

export default HomeNews