import { useNavigate } from "react-router-dom";
import "./homepage.css"

function NiceButton(props){
    return(
        <button className="cta" onClick={props.changeRoute}>
        <span>{props.text}</span>
        <svg viewBox="0 0 13 10" height="10px" width="15px">
         <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
        </button>
    );
}

function Homepage(){
    let navigate = useNavigate(); 

    const routeChange = () =>{ 
        let path = "/createprescription"; 
        navigate(path);
      }
    const routeChange2 = () =>{ 
      let path = "/useprescription"; 
      navigate(path);
    }

    return (
      <> 
      <div className="box">
      <NiceButton changeRoute={routeChange} text="Create Prescription" />  

      <NiceButton changeRoute={routeChange2} text="Use Prescription" /> 
      </div>
      </>
    );
  }

export default Homepage;