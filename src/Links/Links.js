import React from 'react'
import { NavLink } from "react-router-dom";
import './Links.css'

class Links extends React.Component {
    render(){
        return <div className="Links">
                <NavLink to="/" activeClassName="active-link" exact className="Link">首 页</NavLink>
                <NavLink to="/introduce" activeClassName="active-link" className="Link">简 介</NavLink>
                <NavLink to="/detail" activeClassName="active-link" className="Link">详 细</NavLink>
                <NavLink to="/contact" activeClassName="active-link" className="Link">联 系</NavLink>
            </div>;
    }
}

export default Links;