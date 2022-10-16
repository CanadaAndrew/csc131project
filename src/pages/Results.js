import React from 'react'; //placeHolder for results page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getInfo} from '../Backend/SSVendia'

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

function Results() {
    //alert(SSN);
    getInfo();
    const fullName = "a"//getFullName(SSN);
    const DOB = "ab" //getDOB(SSN);
    const ssn = 24459102//SSN;
    return(
        <div>
            <h1>PlaceHolder for results page with temporary button</h1>
            {fullName}
            <br/>
            {DOB}
            <br/>
            {ssn}
            <br/>
            <br/>
            <Button sx={styles} href="Mastpage">
                Return to Mastpage
            </Button>
            <br/>
            <br/>
            <Button sx={styles} href="Dmv">
                to Dmv
            </Button>
            <br/>
            <br/>
            <Button sx={styles} href="StateDep">
                to StateDep
            </Button>
            <br/>
            <br/>
            <Button sx={styles} href="Ssn">
                to Ssn
            </Button>
       </div>
    )
}

export default Results;