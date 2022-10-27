import React from 'react'; //placeHolder for Dmv page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getLicenseNumber} from '../Backend/DMVVendia'
import Grid from '@mui/material/Grid';
import {useState} from 'react'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';

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



function Dmv() {

   
    const SSNNum = sessionStorage.getItem('SSN');
    const [fullName, setFullName] = useState('');
    const [DOB, setDOB] = useState('');
    const [DL, setDL] = useState('');
    getFullName(SSNNum).then((dataName) => {setFullName(dataName)});
    getDOB(SSNNum).then((dataDOB) => {setDOB(dataDOB)});
    getLicenseNumber(SSNNum).then((dataLN) => {setDL(dataLN)});
    return(
        <ThemeProvider theme={mainTheme} >
        <div>
        <CssBaseline /> {/*CssBaseline enables changing background color*/}

       

            <h1><center>DMV Results</center></h1>
            <br />
            <Box sx={{
             
            //secondary background color
            borderRadius: '16px',
            height: 300,
            width: 500,
            margin: 'auto',
            backgroundColor: '#05540a', 

          }}>
              <br />
            <center>Name: {fullName}</center>
            <br />
            <center>Date of birth: {DOB}</center>
            <br />
            <center>Driver's license number: {DL}</center>
            <br />
            <br />
          </Box>
          <br />
         <Grid container spacing={0} justifyContent = "center">

            <Grid item xs = {1}>
               <Button sx={styles} href="Mastpage">
                    Return to searchbar
               </Button>
            </Grid>

            <Grid item xs = {1}>
               <Button sx={styles} href="StateDep">
                   to StateDep
               </Button>
            </Grid>
            
            <Grid item xs = {1}>
               <Button sx={styles} href="Ssn">
                   to SS
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

export default Dmv;