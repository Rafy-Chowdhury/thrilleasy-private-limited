import React from 'react';
import { Link } from 'react-scroll';
import './StickyButton.css';
import { useHistory } from 'react-router-dom';

const StickyButton = () => {
    const history = useHistory();
    const handleEnquiry = () => {
        history.push('/enquiry');
    }

    return (
        <div className="fullDiv">
            <div className="leftDiv">
                
                <button onClick={handleEnquiry} style={{border: '1px solid crimson',backgroundColor: 'crimson',color: 'white', width: '100%', height: '100%'}}><p style={{fontSize: '20px',fontWeight: 'bold'}}>Send Enquiry</p></button>
            </div>
            <div className="rightDiv">
            <Link className="connecting" to="package" smooth={true} duration={1000}><p>Book Now</p></Link>
            </div>
        </div>
    );
};

export default StickyButton;