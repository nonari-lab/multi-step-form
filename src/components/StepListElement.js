import styles from "../styles/StepListElement.css"
import React from "react";

function StepListElement({number, text}){

    return(
        <div className="wrapper">
            <div className="step-number">
                <div>{number}</div>
            </div>
            <div>
                <h2>Step {number}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default StepListElement;