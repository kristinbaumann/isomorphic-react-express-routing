import React, { Component } from 'react';

export default class App extends Component {
    render(){
        return (
            <div>
                <h1>Isomorphic JavaScript with Routing!</h1>
                <a href='/componentA'>Link to Component A</a>
                <br />
                <a href='/componentB'>Link to Component B</a>
            </div>
        );
    }
}