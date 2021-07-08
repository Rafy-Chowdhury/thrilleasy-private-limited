import React, { useState } from "react";
import angle from '../../image/triangle.png';
import moon from '../../image/moon.png';
import sun from '../../image/sun.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faCompactDisc, faPhoneSquareAlt, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";
import { UserContext } from './../../App';
import { useContext } from "react";
import { useHistory } from "react-router-dom";


const PackageBox = ({data}) => {
    const {title, price} = data;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
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
            price: price,
            title: title
        }
        setFlowData(eventData);
        
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
        <div style={{border: '2px solid black', borderRadius: '90px', padding: '4px', marginBottom: '10px'}}>
        <div style={{ display: 'flex', alignItems: 'center',padding: '10px'}}>

            <div className="rounder text-center">

                <input style={{marginRight: '15px'}} onClick={() => setShow(!show)}  type="checkbox" name="check" />
                <label for="checkbox"></label>
                
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
            {
                show ?

                <div className="ml-4 p-3">
                    <div className="d-flex">
                        <div>
                        <img style={{width: '40px', marginRight: '10px'}} src={angle} alt="angle" />
                        </div>
                        <div className="mt-1">
                        <h5>Traveler Details </h5>
                        </div>
                    </div>
                    <div className="mt-1">
                        <p>price</p>
                        <h5>INR {price}</h5>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex">
                            <div className="mr-2">
                            <FontAwesomeIcon icon={faCompactDisc} />
                            </div>
                            <div>
                            Variant
                            <br/>
                            <select {...register("variant", { required: true })}>
                            <option value="10 KM">10 KM</option>
                            <option value="15 KM">15 KM</option>
                            <option value="20 KM">20 KM</option>
                            </select>
                            {errors.variant && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                            </div>
                            <div>
                                Select your date
                                <br/>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                            <FontAwesomeIcon icon={faAt} />
                            </div>
                            <div>
                            Enter Your Name
                            <br/>
                            <input type="text" {...register("name", { required: true })} ></input>
                            {errors.name && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                            <FontAwesomeIcon icon={faPhoneSquareAlt} />
                            </div>
                            <div>
                            Enter Your Number
                            <br/>
                            <input type="text" {...register("number", { required: true })} ></input>
                            {errors.number && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                            <FontAwesomeIcon icon={faAt} />
                            </div>
                            <div>
                            Enter Your email
                            <br/>
                            <input type="text" {...register("email", { required: true })} ></input>
                            {errors.email && <span>This field is required</span>}
                            </div>
                        </div>
                        <div className="d-flex">
                            <div className="mr-2">
                            <FontAwesomeIcon icon={faUserAlt} />
                            </div>
                            <div>
                                Number Of Adult
                                <br/>
                                 <div className="d-flex">
                                    <div>
                                        <button onClick={handleMinus}>-</button>
                                    </div>
                                    <div>
                                        {count}
                                    </div>
                                    <div>
                                        <button onClick={handlePlus}>+</button>
                                    </div>
                                </div>  
                            </div>
                        </div>
                        <input type="submit" />
                    </form>
                </div>

                : null
            }
            
        </div>
    );
};

export default PackageBox;