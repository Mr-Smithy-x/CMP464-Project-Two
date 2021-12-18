
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'

export class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.video = React.createRef()
        this.btn = React.createRef()
    }

    componentDidMount() {

    }


    onBtnClicked(e){

    }

    render() {
        return (
            <section id="main" style={{zIndex: 3}}>
                <video ref={this.video} autoPlay muted loop id="myVideo">
                    <source src="https://i.imgur.com/mbitsTa.mp4" type="video/mp4"/>
                        Your browser does not support HTML5 video.
                </video>

                <div className="content">
                    <button ref={this.btn} id="myBtn" className="h1" onClick={this.onBtnClicked}>la bocina latina</button>
                </div>

            </section>
        );
    }
}

export default HomeContainer;