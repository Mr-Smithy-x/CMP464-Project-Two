
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import VideoRowComponent from "./VideoRowComponent";

export class VideoContainer extends Component {


    fetchVideos(resultCallback, errorCallback){
        fetch("http://labocinalatina.tv/api/videos")
            .then(res => res.json())
            .then(
                (result) => {
                    resultCallback(result)
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    errorCallback(error)
                }
            )
    }

    constructor(props) {
        super(props);
        this.state = {isLoaded: false, pagination: {}, videos: []}
    }

    componentDidMount() {
        this.fetchVideos((result) => {
            this.setState({
                isLoaded: true,
                pagination: result.pagination,
                videos: result.response
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error: error
            });
        })
    }

    onVideoClicked(e, video){
        console.log(video)
    }

    render() {

        const { videos, pagination } = this.state;

        return (
            <section id="vod" style={{zIndex: 2}}>
                <div id="wrapper">
                    <div id="video_container" className="container">
                        <h2>this is <b>cultura</b></h2>
                        <VideoRowComponent onVideoClicked={this.onVideoClicked} videos={videos} page={pagination} />
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoContainer;