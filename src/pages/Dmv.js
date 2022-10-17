import React from 'react'; //placeHolder for Dmv page
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

function Dmv(){
    return(
        <div>
            <h1><center>DMV Results</center></h1>
            <br />
            <center>Name: </center>
            <br />
            <center>Date of birth: </center>
            <br />
            <center>Driver's license number: </center>
            <br />
            <br />
            <Button sx={styles} href="Mastpage">
                Return Mastpage
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
            <br/>
            <br/>
            <Button sx={styles} href="Results">
                to Results
            </Button>
        </div>
    )
}

export default Dmv;