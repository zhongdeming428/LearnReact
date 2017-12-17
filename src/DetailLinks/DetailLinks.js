import React from 'react';
import './DetailLinks.css';
import Params from '../assets/DetailLinksParams';
import { NavLink } from 'react-router-dom';

class DetailLinks extends React.Component {
    render(){
        return <div className="Detail-left-part">
            {
                Params.map( param => (<NavLink 
                    exact
                    className="Detail-links"
                    activeClassName="active-link-detail"
                    key={param.to} 
                    to={param.to}>{param.text}</NavLink>))
            }
        </div>
    }
}

export default DetailLinks;