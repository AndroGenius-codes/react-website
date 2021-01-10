import React from 'react'
import GridItems from './GridItems';
import './Grid.css'

function Grid() {
    return (
        <div className="grids">
            <h1>Lorem ipsum dolor</h1>
            <div className="grid-container">
                <div className="grid-wrapper">
                    <ul className="grid-items">
                        <GridItems 
                        src='img/img1.jpg'
                        text="check out some of our available rooms"
                        label="Available"
                        path="/gallery"
                        />
                         <GridItems 
                        src='img/image1.jpg'
                        text="check out our Restaurant"
                        label="tasteful cusines"
                        path="/restaurant"
                        />
                    </ul>
                    <ul className="grid-items">
                        <GridItems 
                        src='img/img2.jpg'
                        text="check out some of our available rooms"
                        label="Available"
                        path="/gallery"
                        />
                         <GridItems 
                        src='img/img3.jpg'
                        text="check out our Restaurant"
                        label="tasteful cusines"
                        path="/restaurant"
                        />
                         <GridItems 
                        src='img/img4.jpg'
                        text="Have fun with our outdoor services"
                        label="outdoors"
                        path="/gallery"
                        />
                    </ul>
                </div>
            </div>
            
        </div>
    );
}

export default Grid;
