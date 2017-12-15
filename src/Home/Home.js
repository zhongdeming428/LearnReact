import React from 'react';
import './Home.css';

class Home extends React.Component {
    render(){
        return <div className="Home">
            <h1 className="Home-detail">This is a simple example of React Router v4.0</h1>
            <h1 className="Home-detail">Welcome!</h1>
        </div>
    }
}

export default Home;