import React from 'react';
import { Link } from 'react-scroll';
import './StickyButton.css';

const StickyButton = () => {
    return (
        <div className="fullDiv">
            <div className="leftDiv">
                <h6>Starting from <del>199900</del></h6>
                <h5 style={{color: "orange"}}>INR 13800/Adult</h5>
            </div>
            <div className="rightDiv">
            <Link className="connecting" to="package" smooth={true} duration={1000}><p>Book Now</p></Link>
            </div>
        </div>
    );
};

export default StickyButton;