import React, {Component} from 'react';
import reactLogo from '../images/logo192.png';
import './styles/Card.css';


const Card = ({title, description, image, color}) => (
    <div className="card card-aligment"
    style={{
        backgroundColor: `${color || "#454332"}`
    }}
    >
        <div className="card-body">
            <div className="row center">
                <div className="col-6">
                    <img src={image || reactLogo} className="float-rigth img-text-fit"/>
                </div>
                <div className="col-6">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </div>
)


export default Card;