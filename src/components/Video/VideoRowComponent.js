import React, {Component} from 'react'
import VideoComponent from "./VideoComponent";

export class VideoRowComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {onVideoClicked, videos } = this.props;

        return (
            <div className="thumbnails row" meta="cultura">
                {videos.map((video, idx) => (<VideoComponent key={idx} onVideoComponentClicked={onVideoClicked} video={video}/>))}
            </div>
        )
    }
}

export default VideoRowComponent