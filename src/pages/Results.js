import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';

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

function ssnDummy(){
    var ssn1 = "SSN: 123-12-123";
    //var ssn2 = "SSN: 000-00-000";
    //var ssn3 = "SSN: 567-98-235";
    return ssn1;
}

function fNameDummy(){
    var fName1 = "Bob";
    //var fName2 = "Sam";
    //var fName3 = "Jane";
    return fName1;
}

function lNameDummy(){
    var lName1 = "Smith";
    //var lName2 = "Doe";
    //var lName3 = "Philips";
    return lName1;
}

function dobDummy(){
    var dob1 = "DOB: 9/2/99";
    //var dob2 = "DOB: 12/20/00";
    //var dob3 = "DOB: 5/19/87";
    return dob1;
}

function Results() {
    const fName = fNameDummy(); 
    const lName = lNameDummy();
    const dob = dobDummy();
    const ssn = ssnDummy();
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