import React, { Component } from 'react';

export default class ComponentA extends Component {
    render(){
        return (
            <div>
                <h1>This is Component A!</h1>
                <a href='/'>Link to Home</a>
                <br />
                <a href='/componentB'>Link to Component B</a>
            </div>
        );
    }
}