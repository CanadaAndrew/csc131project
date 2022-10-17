import React from 'react'; //placeHolder for Ssn page
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

function Ssn(){
    const fullName = "a"//getFullName(SSN);
    const DOB = "ab" //getDOB(SSN);
    const ssn = 24459102//SSN;
    return(
        <div>
            <h1><center>Social Security Results</center></h1>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />

            <Button sx={styles} href="Mastpage">
                Return Mastpage
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
            <Button sx={styles} href="Results">
                to Results
            </Button>
        </div>
    )
}

export default Ssn;