import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, {Component} from 'react'
import VideoRowComponent from "./VideoRowComponent";

export class VideoContainer extends Component {


    fetchVideos(resultCallback, errorCallback) {
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
        this.iframe = React.createRef()
        this.state = {isLoaded: false, pagination: {}, videos: [], src: null}
    }

    componentDidMount() {
        this.fetchVideos((result) => {
            this.setState({
                isLoaded: true,
                pagination: result.pagination,
                videos: result.response,
                src: null
            });
        }, (error) => {
            this.setState({
                isLoaded: true,
                error: error,
                src: null
            });
        })
    }

    onVideoClicked(e, video) {
        console.log(video)
        let key = process.env.REACT_APP_ZYPE_PLAYER_KEY
        let video_id = video._id
        let url = "https://player.zype.com/embed/" + video_id + ".iframe?api_key=" + key + "&autoplay=true"
        this.setState({src: url, video: video})
    }

    render() {
        const {videos, pagination, src, video} = this.state;

        function getContainer(video, src){
            if(video == null || src == null) return;
            return (<div className="row container">
                <iframe className="col-md-8" width="640" height="360" src={src}/>
                <div className="col-md-4">
                    <b style={{textColor: 'white'}}>{video.title}</b>
                    <br/>
                    <p style={{textColor: 'white'}}>{video.description}</p>
                    <br/>
                    <p style={{textColor: 'white'}}>{video.created_at}</p>
                </div>
            </div>)
        }

        let container = getContainer(video, src)
        return (
            <section id="vod" style={{zIndex: 2}}>
                <div id="wrapper">
                    <div id="video_container" className="container">
                        <h2>this is <b>cultura</b></h2>
                        {container}
                        <VideoRowComponent onVideoClicked={(e, video) => this.onVideoClicked(e, video)} videos={videos}
                                           page={pagination}/>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoContainer;