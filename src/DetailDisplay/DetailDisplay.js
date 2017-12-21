import React from 'react';
import './DetailDisplay.css';
import Params from '../assets/DetailLinksParams';
import Ajax from '@fdaciuk/ajax';
import showdown from 'showdown';

class DetailDisplay extends React.Component {
    constructor({match}){
        super();
        this.param = match.params.param;
        this.state = {in:false};
        this.renderMD = this.renderMD.bind(this);
        this.renderMD(this.param);
    }
    componentWillReceiveProps({match}){
        this.param = match.params.param;
        this.renderMD(this.param);
    }
    renderMD(param){
        let path = Params[0].file;
        if(param !== null && param !== undefined && param !== ' '){
            path = Params[param].file;
        }
        let tmp =  Ajax({
            url:path,
            headers:{
                'content-type':'text/plain'
            },
            method:'get'
        });
        tmp.then(res => {
            // console.log(res);
            let Convertor = new showdown.Converter();
            let html = Convertor.makeHtml(res);
            document.getElementsByClassName('DetailDisplay')[0].innerHTML = html;
        });
    }
    render(){
        return <div className="DetailDisplay">
                <h1>Loading...</h1>
            </div>;
    }
}

export default DetailDisplay;