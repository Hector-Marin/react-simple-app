import React , { Component } from 'react';
import './styles/Welcome.css';

const Welcome = ({username}) => (
    <div className="container welcome-header">
        <div className="col-8">
            <h1>Hello {username}!</h1>
            <p>Let's learn about ReactJS</p>
        </div>
    </div>
);

export default Welcome;