import React from 'react'; //placeHolder for results page
//import { useNavigate } from "react-router-dom";\
import Button from '@mui/material/Button';
//import { getName } from './VendiaTest';

// <button onClick={()=>{navigate("/Mastpage");}}>return</button> {/*button to link master and results page*/}
//const navigate = useNavigate();

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
    
    return(
        <div>
            <script>getName(12731273);</script>
            <h1>PlaceHolder for results page with temporary button, Name of the person searched:</h1>
            <Button sx={styles} href="Mastpage">
                Return
            </Button>
       </div>
    )
}


export default Results;