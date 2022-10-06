import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFName, getInfo} from './SSVendia'

const styles = {
    "&:hover":{
        background: "Green",
        border: "1px solid black",
        color: "White"
    },
    background:"LimeGreen", 
    color:"Black",
    width: 72,
    height: 76,
    fontSize: 12,
    borderRadius: 5,
    boxShadow: 3,
    elevation: 3,
}

function dobDummy(){
    var dob1 = "DOB: 1/12/1983";
    //var dob2 = "DOB: 12/20/00";
    //var dob3 = "DOB: 5/19/87";
    return dob1;
}

function Results() {
    getInfo();
    var mastVar = require('./../Mastpage');
    var SSN = mastVar.SSN;
    const fName = 'Bob'; 
    const lName = 'Nick'//getLName(SSN);
    const dob = dobDummy();
    const ssn = 24459102//SSN;
    return(
        <div>
            <h1>PlaceHolder for results page with temporary button</h1>
            {fName}
            <br/>
            {lName}
            <br/>
            {dob}
            <br/>
            {ssn}
            <br/>
            <br/>
            <Button sx={styles} href="Mastpage">
                Return
            </Button>
       </div>
    )
}

export default Results;