import React, { Component } from 'react';

export default class ComponentB extends Component {
    render(){
        return (
           <div>
                <h1>This is Component B!</h1>
                <a href='/'>Link to Home</a>
                <br />
                <a href='/componentA'>Link to Component A</a>
            </div>
        );
    }
}