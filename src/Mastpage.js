import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { PatternFormat } from 'react-number-format';

const theme1 = createTheme({
  typography: {
    fontFamily: ['"Segoe UI Symbol"'].join(","),
    fontSize: 24,
  },
  palette: {
    primary: { main: "#ffffff" }, // this changes the textbox to white

    background: {
      default: "#000b4f", //changes whole page background to dark blue "#13265C"
    },
  },
});

const buttonStyle = 
{
  "&:hover":{
      background: "Green",
      border: "1px solid black",
      color: "White",
  },
 
  width: 150,
  fontSize: 20,
}

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <PatternFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value
          }
        });
      }}
      thousandSeparator
      // isNumericString
    />
  );
}




const Maspage = () => {
  const [value, setValue] = useState("");
  const ALPHA_NUMERIC_DASH_REGEX = /^[0-9\b]+$/;
  var btnDisabled = useState(true)
  var count = 1
  return (
    <ThemeProvider theme={theme1}>
      {" "}
      {/* ThemeProvider uses the theme function above*/}
      <div>
        <CssBaseline /> {/* This enables changing background color*/}
        <Typography align="center" color="common.white">
          {" "}
          {/*Typography enables text editing*/}
          <h1 id="h1"> SS# Background Check</h1>
    
          <Box sx={{
        
        height: 1000, //just a quick fix for now, TODO: find a way to set it to the height of the page
        backgroundColor: '#829cd0', //placeholder, TODO: discuss nice colors w/ group
        margin: 'auto', //this pushes the width to the page size and centers the text
      
      }
    } >
       <br />
          <TextField
          inputProps={{ format: "###-##-####" }}
        InputProps={{
          inputComponent: NumberFormatCustom
          //inputComponent: TextMaskCustom //TODO: textmaskcustom breaks onChange below, need to fix
        }}
        onChange={(e) => setValue(e.target.value) } 

           
            helperText={
              value.length !== 9 && value.length !== 0
                ? "SS# length is invalid"
                : " "
                
            }
            
            btnDisabled={
              value.length !== 9
              ? btnDisabled = true
              : btnDisabled = false
            }
        
            error={value.length < 9 && value.length !== 0}
            id="filled-basic"
            label="Social Security #"
            variant="outlined"
            sx={{ input: { color: "white" } }}

            
           
          />
   <br /> 

   
   
   <Grid container spacing={0} justifyContent= "center" >
    
    <Grid item xs={4}>{/*TODO: figure out how to change width in buttonStyle*/}
     <Button href="Ssn" sx={buttonStyle } variant="outlined" disabled={btnDisabled} size = "large">SSN</Button> {/*button size warped, fix later*/}
     </Grid>  
  
     <Grid item xs={0}>  
      <Button href="StateDep" size = "large"   sx={ buttonStyle} disabled={btnDisabled} variant="outlined">DMV</Button>
      </Grid>   
      <Grid item xs={4}>  
      <Button href="Dmv" size = "large"  sx={ buttonStyle } disabled={btnDisabled} variant="outlined">State</Button>
      </Grid>   
       
        </Grid>

        <h6>Note: Alphabetical and Special Characters are not allowed. Ex. A-Z !@#$%</h6>


   </Box>

    
        </Typography>
      </div>
    </ThemeProvider>
    
    
    
  );
};

export default Maspage;