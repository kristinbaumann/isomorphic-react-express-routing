import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ComponentB extends Component {
    render(){
        return (
           <div>
                <h1>This is Component B!</h1>
                <Link to='/'>Link to Home</Link>
                <br />
                <Link to='/componentA'>Link to Component A</Link>
            </div>
        );
    }
}