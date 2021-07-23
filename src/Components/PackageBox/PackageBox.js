import React from "react";
import moon from '../../image/moon.png';
import sun from '../../image/sun.png';
// import BoolingForm from "../BookingForm/BoolingForm";
import { useHistory } from "react-router-dom";
import './PackageBox.css';



const PackageBox = ({data}) => {

    // console.log(data);
    const {title, price} = data;
    // const [modalIsOpen, setIsOpen] = useState(false);

    // function openModal() {
    //   setIsOpen(true);
    // }
  
  
    // function closeModal() {
    //   setIsOpen(false);
    // }
    const history = useHistory();
    
    const handleButton = (title) => {
        history.push(`/form/${title}`);
    }

    
    return (

       
             <div className="package-box">
        <div style={{ display: 'flex', alignItems: 'center',padding: '10px'}}>

            <div className=" text-center">
                <div onClick={() => handleButton(title)} className="rounder" >
                </div>
            </div>
            {/* <div className=" text-center">
                <div onClick={() => handleButton(title)} className="rounderMobile" >
                </div>
            </div> */}
            
          
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
        {/* <BoolingForm modalIsOpen={modalIsOpen} closeModal={closeModal} title={title} price={price}></BoolingForm> */}
        </div>

           
      
       
    );
};

export default PackageBox;