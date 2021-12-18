import React, {Component} from 'react'
import VideoComponent from "./VideoComponent";

export class VideoRowComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="thumbnails row" meta="cultura">
                {this.props.videos.map((video, idx) => (<VideoComponent key={idx} onVideoComponentClicked={this.props.onVideoClicked} video={video}/>))}
            </div>
        )
    }
}

export default VideoRowComponent