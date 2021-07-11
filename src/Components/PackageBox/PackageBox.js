import React from "react";
import moon from '../../image/moon.png';
import sun from '../../image/sun.png';
import { useHistory } from "react-router-dom";
import './PackageBox.css';


const PackageBox = ({data}) => {
    const {title, price} = data;
    const history = useHistory();
    
    const handleButton = (title) => {
        history.push(`/form/${title}`);
    }

    
    return (
        <div className="package-box">
        <div style={{ display: 'flex', alignItems: 'center',padding: '10px'}}>

            <div className=" text-center">
                <div className="rounder" onClick={() => handleButton(title)} >
                </div>
            </div>
          
            <div className="mr-auto">
                <h6>{title}</h6>
                <p><img style={{width: '35px'}} src={sun} alt="img" /> 3 Days</p>
                <p><img style={{width: '40px'}} src={moon} alt="img" />2 Nights</p>
            </div>
            <div className="mr-2">
                <p><del>INR 1,599</del></p>
                <h5>INR {price} <br/> per Adult</h5>
            </div>
        </div>
        </div>
    );
};

export default PackageBox;