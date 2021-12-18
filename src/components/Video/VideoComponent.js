import React, {Component} from 'react'

export class VideoComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {video, onVideoComponentClicked} = this.props;
        return (
            <span onClick={(e) => onVideoComponentClicked(e, video)} className="thumbnail">
                                    <div className="vid col-xs-12 col-sm-12 col-md-6 col-lg-3 zype thumbnail"
                                         style={{backgroundImage: 'url(' + video.thumbnails[0].url + ')'}}
                                         iframesrc="'/api/videos/'+video._id">

                                    </div>
                                      <div className="para">
                                          <div className="caption">
                                              <b>{video.title}</b>
                                              <p>{video.short_description}</p>
                                          </div>
                                      </div>
                                </span>
        )
    }
}

export default VideoComponent