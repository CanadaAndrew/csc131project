import React from 'react'; //placeHolder for Dmv page
import Button from '@mui/material/Button';
import {getFullName, getDOB, getLicenseNumber, getURL} from '../Backend/DMVVendia'
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import logo from '../logo.png';
import Switch from '@mui/material/Switch';
import { useState, useEffect } from "react";

const lightTheme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
    fontSize: 24,
    

  },
  palette: {
    primary: { main: "#124a37" }, // this changes the textbox to green
    background: {
      default: "#d7d0b8", //changes whole page background to pale
    },
  },
});

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Arial"].join(","),
    fontSize: 24,
    

  },
  palette: {
    primary: { main: "#212121" }, // this changes the textbox to dark black
    background: {
      default: "#282a3a", //changes whole page background to a lighter black
    },

  },
});

  
const styles = {
    "&:hover":{
        background: "Green",
        border: "1px solid black",
        color: "White"
    },
    width: 150,
    fontSize: 20,
    color: "white",
    //border: "1px solid white"
}

function comparisonTest() {
  var isTrue;
  if (sessionStorage.getItem("allMatch") === "true"){
    isTrue = true;
  } else {
    isTrue = false;
  }
  var x = "";
  if (isTrue) {
    x = "This information is consistent with results from other databases."
  }else {
    x += "Warning:\n"

    if(sessionStorage.getItem("errorSD") === "true"){
      x += "There was an error in the State Department database, cannot compare.\n"
    }else if(sessionStorage.getItem("DMV_SD_Name_Match") === "false" && sessionStorage.getItem("DMV_SD_DOB_Match") === "false"){
      x += "The name and date of birth does not match with the State Department database.\n"
    }else if(sessionStorage.getItem("DMV_SD_Name_Match") === "false"){
      x += "The name does not match with the State Department database.\n";
    }else if(sessionStorage.getItem("DMV_SD_DOB_Match") === "false"){
      x += "The date of birth does not match with the State Department database.\n";
    }

    if(sessionStorage.getItem("errorSS") === "true"){
      x += "There was an error in the Social Security database, cannot compare.\n"
    }else if(sessionStorage.getItem("DMV_SS_Name_Match") === "false" && sessionStorage.getItem("DMV_SS_DOB_Match") === "false"){
      x += "The name and date and date of birth does not match with the Social Security database.\n"
    }else if(sessionStorage.getItem("DMV_SS_Name_Match") === "false"){
      x += "The name does not match with Social Security database.\n";
    }else if(sessionStorage.getItem("DMV_SS_DOB_Match") === "false"){
      x += "The date of birth does not match with Social Security database.\n";
    }
  }
  return x;
}

function Dmv() {
  const [mode, setMode] = useState(sessionStorage.getItem("light"));
  useEffect(() => {
    sessionStorage.setItem("light", mode);
  },[mode]);
  const selectedTheme = mode === "light" ?  lightTheme : darkTheme;
    const fullName = getFullName();
    const DOB = getDOB();
    const DL = getLicenseNumber();
    const Picture = getURL();
    return(
        <ThemeProvider theme={selectedTheme} >
        <div>
        <CssBaseline /> {/*CssBaseline enables changing background color*/}

        <AppBar position="static" enableColorOnDark="true" >
        <Toolbar variant="dense">
        <h0><img style={{ width:200, height: 60 }} src={logo} alt="TravelX logo" /></h0>
        <Grid container spacing={0} justifyContent = "right">

        <Grid item xs = {1}>
<Switch checked = {mode === "light" ? false : true} onChange={() => setMode(mode === "light" ?  "dark" : "light")} color={'success'} />
 </Grid>

            <Grid item xs = {2}>
               <Button sx={styles} size="large" href="Mastpage">
                    Return
               </Button>
            </Grid>

            <Grid item xs = {2}>
               <Button sx={styles} size="large" href="StateDep">
                   StateDep
               </Button>
            </Grid>
            
            <Grid item xs = {2}>
               <Button sx={styles} size="large" href="Ssn">
                   SSN
               </Button>
            </Grid>
         </Grid>
        </Toolbar>
        </AppBar>
        <AppBar position="static" style={{ background: 'linear-gradient(45deg, #de880d, 65%, #124a37 )'}} sx={{ height: '5px' }} ></AppBar>


          <br />
          <br />
          <Box sx={{
            //secondary background color
            height: 700, 
            margin: 'auto', //centers the box and text
            width: 500,
            border: 2,
            borderColor: 'black',
            backgroundColor: 'white',
          }}>
            <center>{<img src={Picture}/>}</center>
            <Box sx={{backgroundColor: "#124a37",
            height: 65, 
            width: 350,
            margin: 'auto',
            display: 'flex',
          
          }}> <Grid  item
          container
         alignItems="center" justifyContent="center"> <h0 style={{ color: 'white' }}>{fullName} </h0></Grid></Box>
            
          
            <br />
            <center>
            <h0 style={{ color: "#124a37",fontWeight: 'bold' }}> DOB </h0>
            <br />
              {DOB}
            <br /><br />
            <h0 style={{ color: "#124a37",fontWeight: 'bold' }}> DL# </h0>
           <br />
           {DL}
           </center>
            <br />
            <br />
          </Box>
            
          <br />
        </div>
         <pre><center>{comparisonTest()}</center></pre>
        </ThemeProvider>  
    )
   
}


export default Dmv;