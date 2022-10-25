import React from 'react'; //placeHolder for Ssn page
import Button from '@mui/material/Button';
import {getFullName, getDOB} from '../Backend/SSVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const mainTheme = createTheme({
    typography: {
      fontFamily: ["Segoe UI Symbol"].join(","),
      fontSize: 24,
    },
    palette: {
      primary: { main: "#ffffff" }, // this changes the textbox to white
  
      background: {
        default: "#c49e06", //changes whole page background to dark blue 
      },
    },
  });

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
    const SSNNum = sessionStorage.getItem('SSN');
    const [fullName, setFullName] = useState('');
    const [DOB, setDOB] = useState('');
    getFullName(SSNNum).then((dataName) => {setFullName(dataName)});
    getDOB(SSNNum).then((dataDOB) => {setDOB(dataDOB)});
    return(
        <ThemeProvider theme={mainTheme} >
         <CssBaseline /> {/*CssBaseline enables changing background color*/}
        <div>
            <h1><center>Social Security Results</center></h1>
            <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />

         <Grid container spacing={0} justifyContent = "center">
              
            <Grid item xs = {1}>
               <Button sx={styles} href="Mastpage">
                   Return to searchbar
               </Button>
            </Grid>
            
            <Grid item xs = {1}>
               <Button sx={styles} href="Dmv">
                   to Dmv
               </Button>
            </Grid>
            
            <Grid item xs = {1}>
               <Button sx={styles} href="StateDep">
                   to StateDep
               </Button>
            </Grid>

            <Grid item xs = {1}>
               <Button sx={styles} href="Results">
                   to Results
               </Button>
            </Grid>

         </Grid>
        </div>
        </ThemeProvider>  
    )
}

export default Ssn;