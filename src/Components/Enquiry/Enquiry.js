import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


import "react-datepicker/dist/react-datepicker.css";
import './Enquiry.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const Enquiry = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  

    const onSubmit = data => {
        const eventData = {
            // variant : data.variant,
            // date : startDate.toDateString(),
            // name : data.name,
            // number : data.number,
            // email : data.email,
            // person : count,
            // price : price,
            // title : title
        }
        console.log(eventData);
    }    

    return (
     <Container>
         <Row>
             <Col xs ={12} md={8}>
                 <div className="mt-2">
                     <p style={{fontWeight: 'bold'}}>Get in touch with our travel expert</p>
                 </div>
                 <div>
                 <form className="mt-2" onSubmit={handleSubmit(onSubmit)}>
                     <div>
                     <input className="form-control" type="text" placeholder="Your Name" {...register("name", { required: true })} ></input>
                     {errors.name && <span style={{color: 'red'}}>This field is required</span>}
                     </div>
                     <div className="mt-2">
                     <input className="form-control" type="text" placeholder="Your Email" {...register("email", { required: true })} ></input>
                     {errors.email && <span style={{color: 'red'}}>This field is required</span>}   
                     </div>
                     <div className="mt-2">
                     <input className="form-control" type="text" placeholder="Phone" {...register("phone", { required: true })} ></input>
                     {errors.phone && <span style={{color: 'red'}}>This field is required</span>}   
                     </div>

                     
                     <div className="mt-2">
                     <input className="form-control" type="date" placeholder="MM/DD/YYYY" onFocus="(this .type='hello')" {...register("date", { required: true })} ></input>
                     {errors.date && <span style={{color: 'red'}}>This field is required</span>} 
                     </div>


                     <div className="mt-2">
                     <input className="form-control" type="number" min="1" placeholder="Number of People" {...register("people", { required: true })} ></input>
                     {errors.phone && <span style={{color: 'red'}}>This field is required</span>} 
                     </div>

                     <div className="mt-2">
                     <textarea className="form-control" id="" cols="30" row="8" placeholder="Message" {...register("message", { required: true })} ></textarea>
                     {errors.message && <span style={{color: 'red'}}>This field is required</span>} 
                     </div>
                     <div style={{display: 'flex', marginTop: '10px'}}>
                        <div className="mr-2">
                        <FontAwesomeIcon style={{color: '#55f272'}} icon={faCheck} />
                        </div>
                        <div>
                        <p>We assure the privacy of your contact data.</p>
                        </div>
                     </div>
                     <div style={{display: 'flex'}}>
                        <div className="mr-2">
                        <FontAwesomeIcon style={{color: '#55f272'}} icon={faCheck} />
                        </div>
                        <div>
                        <p>This data will only used by our team to contact you and no other purposes.</p>
                        </div>
                     </div>
                     <div className="mt-2 mb-3">
                     <input type="submit" style={{width: '100%', border: '1px solid #e06812', borderRadius: '2px', backgroundColor: '#e06812', padding: '5px', color: 'white'}} className="" value="Send Enquiry"></input> 
                     </div>
                     
                 </form>
                 </div>

             </Col>
         </Row>
     </Container>
    );
};

export default Enquiry;