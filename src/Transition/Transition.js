import React from 'react';
import './Transition.css';
import  { CSSTransition }  from 'react-transition-group';

class Transition extends React.Component {
    render(){
        return <CSSTransition
                in={this.props.in}
                classNames="fade"
                timeout={500} >
            {this.props.children}
        </CSSTransition>;
    }
}

export default Transition;