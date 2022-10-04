import React from "react";
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './pages/Results';

const styles = {
    "&:hover":{
        background: "Green",
        border: "1px solid black",
        color: "White"
    },
    background:"LimeGreen", 
    color:"Black",
    width: 100,
    height: 75,
    fontSize: 15,
    borderRadius: 5,
    boxShadow: 3,
    elevation: 3,
}

const theme1 = createTheme({
    typography: 
    {
        fontFamily: [  '"Segoe UI Symbol"',  ].join(','),
        fontSize: 24,
    },
    palette: 
    {
        primary: {main: "#ff8f00" }, // this changes the textbox to orange?

        background: 
        {
            default: "#666666" //changes whole page background to gray
        },
      },
  });

function Mastpage(){
    return(
        <div>
        <ThemeProvider theme={theme1}> {/* ThemeProvider uses the theme function above*/}
            <CssBaseline /> {/* This enables changing background color*/}
            <Typography align= "center" color="common.black" >    {/*Typography enables text editing*/}
            <img src="/images/IMG_1183.JPG" alt=""/> {/*USA image for home page*/}
            <h1 id="h1"  > SS# Background Check</h1>
            <p1>Enter SSN here:   </p1>
            <TextField id="filled-basic" label="Social Security #" variant="filled" />
            <Button sx={styles} onClick = "createVendia();" href="Results" endIcon={<ArrowForwardIcon/>}>
                Enter
            </Button>
            </Typography>
            </ThemeProvider>
        </div>
    )
}

function createVendia(){
    console.log("Creating vendia client");
    var cClient = new VendiaClient();
    cClient.createSSList();
    var searchedName = cClient.getName(document.getElementById("filled-basic"));
    console.log("The name of the client is "+searchedName);
}
export default Mastpage;