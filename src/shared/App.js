import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render(){
        return (
            <div>
                <h1>Isomorphic JavaScript with Routing!</h1>
                <Link to='/componentA'>Link to Component A</Link>
                <br />
                <Link to='/componentB'>Link to Component B</Link>
            </div>
        );
    }
}