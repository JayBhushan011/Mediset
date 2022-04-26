import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./createpres.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSolid, faPlus } from '@fortawesome/free-solid-svg-icons'


function CreatePrescription(){
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [plusSign, setPlusSign] = useState(0);


    const onSubmit = data => console.log(data); //data variable to be put on block



    return (
    <>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" /> 

    <div className="container">
    <form className="form-class" onSubmit={handleSubmit(onSubmit)}>
    <p className="welcome-p">Welcome</p>

    <input className="input-class" defaultValue="Patient ID" {...register("PatientID", {required: true})} /><br />
    {errors.PatientID && <span className="span-errors">This field is required</span>}

    
    <input className="input-class" defaultValue="Medicine" {...register("Medicine", { required: true })} /><br />
    {errors.Medicine && <span className="span-errors" >This field is required</span>}

    <FontAwesomeIcon icon={faPlus} className="plus-button" onClick={() => setPlusSign(plusSign + 1)} />
    {Array.from(Array(plusSign)).map((c, index) => {
        return (
        
        <>
          <input className="input-class" key={index} defaultValue="Other Medicine" {...register("Medicine"+index)} />
        </>
        );
      
      })}

    
    <input className="input-class" type="submit" value="Send Prescription" /><br />

    
    </form>

      <div className="drops">
        <div className="drop drop-1"></div>
        <div className="drop drop-2"></div>
        <div className="drop drop-3"></div>
        <div className="drop drop-4"></div>
        <div className="drop drop-5"></div>
      </div>
    </div>
   
    
    </>
  );
}

export default CreatePrescription;


