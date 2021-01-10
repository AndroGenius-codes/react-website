import React from 'react';
import { Link } from 'react-router-dom'

function GridItems(props) {
    return(
        <div>
            <li className="grid-items">
                <Link className="grid-item-link" to={props.path}>
                    <div className="grid-item-wrap" data-category={props.label}>
                        <img src={props.src} alt="Room" className="grid-item-image"></img>
                    </div>
                    <div className="grid-item-info">
                       <h5 className="grid-item-text">{props.text}</h5>
                    </div> 
                </Link>
            </li>
        </div>

    )
}


export default GridItems;