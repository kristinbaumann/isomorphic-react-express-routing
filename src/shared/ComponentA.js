import React, { Component } from 'react';
import { Link } from 'react-router';

export default class ComponentA extends Component {
    render(){
        return (
            <div>
                <h1>This is Component A!</h1>
                <Link to='/'>Link to Home</Link>
                <br />
                <Link to='/componentB'>Link to Component B</Link>
            </div>
        );
    }
}