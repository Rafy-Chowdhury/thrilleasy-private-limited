import React, { useState,useEffect, useContext } from 'react';
import angle from '../../image/triangle.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faCompactDisc, faMinusSquare, faPhoneSquareAlt, faPlusSquare, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt, faUserCircle } from '@fortawesome/free-regular-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Container,Row,Col } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { UserContext } from './../../App';
import { useHistory } from "react-router-dom";
import { useParams } from 'react-router';
import './Valid.css';


const FormValidation = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const [count, setCount] = useState(1);
    const [flowData, setFlowData] = useContext(UserContext);
    const [data, setData] = useState([]);

    const { title } = useParams();
    useEffect( () => {
            const mainData= [
        {
            title: "Treck from Pantwari",
            price: 1000
        },
        {
            title: "Treck from Dehradun",
            price: 1200
        },
        {
            title: "Treck from Delhi",
            price: 1500
        }
    ]
    setData(mainData);
    }, [title]);

    
    const iteams = data.find(deta => deta.title === title);

    const history = useHistory();

    const onSubmit = data => {
        const eventData = {
            variant : data.variant,
            date : startDate.toDateString(),
            name : data.name,
            number : data.number,
            email : data.email,
            person : count,
            price : iteams?.price,
            title : iteams?.title
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
        <Container>
            <Row>
                <Col xs ={12} md={9}>
                <div className="ml-4 mt-3 mainDiv">
                    <div className="d-flex">
                        <div>
                        <img style={{width: '30px', marginRight: '10px'}} src={angle} alt="angle" />
                        </div>
                        <div className="mt-1">
                        <span style={{fontSize: '20px',fontWeight: '400'}}>Traveler Details</span>
                        </div>
                    </div>
                    <div style={{marginLeft: '45px', marginTop: '15px'}} >
                        <p style={{lineHeight: '1px', fontWeight: '500'}}>price</p>
                        <h6>INR {iteams?.price}</h6>
                    </div>

                    <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                        <div style={{display: 'flex'}} >
                            <div className="ml-2 mr-2 mt-1">
                            <FontAwesomeIcon style={{fontSize: '22px', marginRight: '5px'}} icon={faCompactDisc} />
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
                        <div style={{display: 'flex', marginTop: '10px'}}>
                            <div className="ml-2 mr-2 mt-1">
                            <FontAwesomeIcon style={{fontSize: '22px', marginRight: '8px'}} icon={faCalendarAlt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Select Your Date</span>
                            </div>
                                <DatePicker className="form-control" selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div style={{display: 'flex',  marginTop: '10px'}}>
                            <div className="ml-2 mr-1">
                            <FontAwesomeIcon style={{fontSize: '22px', marginRight: '8px'}} icon={faUserCircle} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Enter Your Name</span>
                            </div>
                            <input className="form-control" type="text" {...register("name", { required: true })} ></input>
                            {errors.name && <span style={{color: 'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', marginTop: '10px', marginLeft: '3px'}}>
                            <div className="ml-2 mr-1">
                            <FontAwesomeIcon style={{fontSize: '22px', marginRight: '8px'}} icon={faPhoneSquareAlt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Enter Your Number</span>
                            </div>
                            <input className="form-control" type="text" {...register("number", { required: true })} ></input>
                            {errors.number && <span style={{color: 'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', marginTop: '10px', marginLeft: '3px'}}>
                            <div className="ml-2 mr-1">
                            <FontAwesomeIcon style={{fontSize: '22px', marginRight: '8px'}} icon={faAt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Enter Your Email</span>
                            </div>
                            <input className="form-control" type="text" {...register("email", { required: true })} ></input>
                            {errors.email && <span style={{color: 'red'}}>This field is required</span>}
                            </div>
                        </div>
                        <div style={{display: 'flex', marginTop: '10px', marginLeft: '3px'}}>
                            <div className="ml-2 mr-1">
                            <FontAwesomeIcon style={{fontSize: '22px', marginRight: '8px'}} icon={faUserAlt} />
                            </div>
                            <div>
                            <div className="mb-1">
                                <span style={{fontSize: '17px',fontWeight: '400'}}>Number of Adults</span>
                            </div>
                                 <div className="d-flex">
                                    <div>
                                    <FontAwesomeIcon onClick={handleMinus} style={{fontSize: '22px', marginRight: '8px',marginTop: '6px', cursor: 'pointer'}} icon={faMinusSquare} />
                                    </div>
                                    <div className="mb-1 mr-2">
                                <span style={{fontSize: '20px',fontWeight: '400'}}>{count}</span>
                            </div>
                                    <div>
                                    <FontAwesomeIcon onClick={handlePlus} style={{fontSize: '22px', marginRight: '8px',marginTop: '6px', cursor: 'pointer'}} icon={faPlusSquare} />
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <div className="text-center mt-3 mb-3">
                        <input style={{border: '1px solid black', backgroundColor: 'black', color: 'white', width: '50%', padding: '5px'}} type="submit" value="book now"></input>
                        </div>
                    </form>
                </div>
                </Col>
            </Row>
        </Container>
    );
};

export default FormValidation;