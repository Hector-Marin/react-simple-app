import React from 'react';
import reactLogo from '../images/logo192.png';
import { Link } from 'react-router-dom';

const AddButton = (props) => (
    <div className="col-3 mx-auto centered">
        <Link to="/new-card">
            <img src={reactLogo} />
        </Link>
    </div>
);

export default AddButton;