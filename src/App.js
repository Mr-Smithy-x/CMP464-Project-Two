
import { BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import logo from './logo.svg';
import React, { Component } from 'react'
import VideoContainer from "./components/Video/VideoContainer";
import HomeContainer from "./components/Home/HomeContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css'
import './App.css'

export class App extends Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {


        return (
            <div className="App container-fluid">
                <BrowserRouter>
                    <div className="navigationMenu">
                        <Link to="/" className="navigationItems">Home</Link>
                        <Link to="/videos" className="navigationItems">Videos</Link>
                    </div>

                    <Routes>
                        <Route exact path="/" element={<HomeContainer/>}/>
                        <Route exact path="/videos" element={<VideoContainer/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;