import React, { useState, useContext } from 'react';
import Modal from 'react-modal';
import angle from '../../image/triangle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faCompactDisc, faMinusSquare, faPhoneSquareAlt, faPlusSquare, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";
import { UserContext } from './../../App';
import { useHistory } from "react-router-dom";


const customStyles = {
  content: {
  
    left: '65%',
    right: 'auto',
    bottom: 'auto',

  },
};

Modal.setAppElement('#root');

const BoolingForm = ({modalIsOpen,closeModal,title, price }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [count, setCount] = useState(1);
    const [flowData, setFlowData] = useContext(UserContext);
   
    const history = useHistory();

    const onSubmit = data => {
        const eventData = {
            variant : data.variant,
            date : startDate.toDateString(),
            name : data.name,
            number : data.number,
            email : data.email,
            person : count,
            price : price,
            title : title
        }
        setFlowData(eventData);
        // <Link to="/booking"></Link>
        history.push("/booking");
    }
    const handlePlus = (e) => {
        e.preventDefault();
        setCount(count + 1);
    }
    const handleMinus = (e) => {
        
        e.preventDefault();
        if( count === 1 ){
            alert("there should be minimum one person")
        } else{
            setCount(count - 1);
        }
        
    }

    return (
        <div>
                 
      <Modal
        isOpen={modalIsOpen}
       
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
    <div className="mainDiv">
                    <div className="d-flex">
                        <div>
                        <img style={{width: '30px', marginRight: '10px'}} src={angle} alt="angle" />
                        </div>
                        <div className="">
                        <span style={{fontSize: '20px',fontWeight: '400'}}>Traveler Details</span>
                        </div>
                    </div>
                    <div style={{marginLeft: '45px', marginTop: '15px'}} >
                        <p style={{lineHeight: '1px', fontWeight: '500'}}>price</p>
                        <h6>INR {price}</h6>
                    </div>

                    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{display: 'flex', alignItems: 'center'}} >
                            <div className="mr-2 mt-1">
                            <FontAwesomeIcon style={{fontSize: '30px', marginRight: '5px'}} icon={faCompactDisc} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Variant</span>
                            </div>
                            
                            <select className="form-control" {...register("variant", { required: true })}>
                            <option value="10 KM">10 KM</option>
                            <option value="15 KM">15 KM</option>
                            <option value="20 KM">20 KM</option>
                            </select>
                            {errors.variant && <span>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                            <div className="mr-2 mt-1">
                            <FontAwesomeIcon style={{fontSize: '30px', marginRight: '8px'}} icon={faCalendarAlt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Select Your Date</span>
                            </div>
                                <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px'}}>
                            <div className="mr-2">
                            <FontAwesomeIcon style={{fontSize: '30px', marginRight: '8px'}} icon={faUserCircle} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Enter Your Name</span>
                            </div>
                            <input className="form-control" type="text" {...register("name", { required: true })} ></input>
                            {errors.name && <span style={{color: 'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '3px'}}>
                            <div className="mr-2">
                            <FontAwesomeIcon style={{fontSize: '30px', marginRight: '8px'}} icon={faPhoneSquareAlt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Enter Your Number</span>
                            </div>
                            <input className="form-control" type="text" {...register("number", { required: true })} ></input>
                            {errors.number && <span style={{color: 'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '3px'}}>
                            <div className="mr-2">
                            <FontAwesomeIcon style={{fontSize: '30px', marginRight: '8px'}} icon={faAt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Enter Your Email</span>
                            </div>
                            <input className="form-control" type="text" {...register("email", { required: true })} ></input>
                            {errors.email && <span style={{color: 'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', marginTop: '10px', marginLeft: '3px'}}>
                            <div className="mr-2">
                            <FontAwesomeIcon style={{fontSize: '30px', marginRight: '8px'}} icon={faUserAlt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Number of Adults</span>
                            </div>
                                 <div className="d-flex">
                                    <div>
                                    <FontAwesomeIcon onClick={handleMinus} style={{fontSize: '30px', marginRight: '8px', cursor: 'pointer'}} icon={faMinusSquare} />
                                    </div>
                                    <div className="mb-1 mr-2">
                                <span style={{fontSize: '20px',fontWeight: '400'}}>{count}</span>
                            </div>
                                    <div>
                                    <FontAwesomeIcon onClick={handlePlus} style={{fontSize: '30px', marginRight: '8px', cursor: 'pointer'}} icon={faPlusSquare} />
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="text-center mt-3">
                        <input style={{border: '1px solid black', backgroundColor: 'black', color: 'white', width: '50%', padding: '5px'}} type="submit" value="book now"></input>
                        </div>
                    </form>
                </div>
      </Modal>
            
        </div>
    );
};

export default BoolingForm;