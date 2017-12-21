import React from 'react';
import './Contact.css';
import Ajax from '@fdaciuk/ajax';
import showdown from 'showdown';

class Contact extends React.Component {
    constructor(){
        super();
        this.renderMD = this.renderMD.bind(this);
    }
    componentDidMount(){
        this.renderMD();
    }
    renderMD(){
        let res = Ajax({
            headers:{
                'content-type':'text/plain'
            },
            url:'./MDFiles/contact.md',
            method:'get'
        });
        res.then(response => {
            // console.log(response);
            let generator = new showdown.Converter();
            let html = generator.makeHtml(response);
            document.getElementsByClassName('contact-panel')[0].innerHTML = html;
        })
    }
    render(){
        return <div className="contact">
            <div className="contact-panel">
                <h1>Loading...</h1>
            </div>
        </div>
    }
}

export default Contact;