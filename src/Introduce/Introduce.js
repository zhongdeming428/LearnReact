import React from 'react';
import './Introduce.css';
import Ajax from '@fdaciuk/ajax';
import showdown from 'showdown';

class Introduce extends React.Component {
    constructor(){
        super();
        this.fetchMD = this.fetchMD.bind(this);
    }
    fetchMD(){
        let res = Ajax({
            method:'get',
            url:'./MDFiles/introduce.md'
        });
        res.then(response => {
            let divDom = document.getElementsByClassName('Introduce-display')[0];
            let converter = new showdown.Converter();
            let text = response;
            let html = converter.makeHtml(text);
            divDom.innerHTML = html;
        });
    }
    componentDidMount(){
        this.fetchMD();
    }
    render(){
        return <div className="Introduce">
            <div className="Introduce-display">
                <h1 className="Introduce-loading">Loading......</h1>
            </div>
        </div>
    }
}

export default Introduce;