import React, {Component} from 'react'

export class VideoComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span onClick={(e) => this.props.onVideoComponentClicked(e, this.props.video)} className="thumbnail">
                                    <div className="vid col-xs-12 col-sm-12 col-md-6 col-lg-3 zype thumbnail"
                                         style={{backgroundImage: 'url(' + this.props.video.thumbnails[0].url + ')'}}
                                         iframesrc="'/api/videos/'+video._id">

                                    </div>
                                      <div className="para">
                                          <div className="caption">
                                              <b>{this.props.video.title}</b>
                                              <p>{this.props.video.short_description}</p>
                                          </div>
                                      </div>
                                </span>
        )
    }
}

export default VideoComponent