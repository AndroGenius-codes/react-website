import React from 'react';
import '../App.css';
import {Button} from './Button';
import './Hero.css';

export default function Hero() {
    return (
        <div className="hero">
            <video src="videos/video1.mp4" autoPlay loop muted />
            <h1>Welcome to AndroGENIUS hotel</h1>
            <p>lorem ipsum dolor sit amet?</p>
            <div className="hero-btn">
                <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>EXPLORE</Button>
                <Button className="btn" buttonStyle='btn--primary' buttonSize='btn--large'>Play <i className='far fa-play-circle'></i></Button>
            </div>
        </div>
    )
}
