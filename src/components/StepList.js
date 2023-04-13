import style from "../styles/StepList.css";
import React from "react";
import StepListElement from "./StepListElement";

function StepList(){

    const textArr = ['your text', 'select plan', 'add-ons', 'summary'];

    return(
        <div className="step-list">
            <StepListElement number="1" text={textArr[0]}/>
            <StepListElement number="2" text={textArr[1]}/>
            <StepListElement number="3" text={textArr[2]}/>
            <StepListElement number="4" text={textArr[3]}/>
        </div>
    );
};

export default StepList;