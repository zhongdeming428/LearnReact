import React from 'react';
import './Detail.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailLinks from '../DetailLinks/DetailLinks';
import NoMatch from '../NotFound';
import DetailDisplay from '../DetailDisplay/DetailDisplay';

class Detail extends React.Component {
    render(){
        return <div className="Detail">
            <BrowserRouter basename="/react-router-demo">
                <div className="Detail-display">
                    <DetailLinks />
                    <div className="display">
                        <Switch>
                            <Route path="/detail" exact component={DetailDisplay} />
                            <Route path="/detail/:param" component={DetailDisplay} />
                            <Route component={NoMatch} />
                        </Switch>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    }
}

export default Detail;