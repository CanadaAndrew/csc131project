import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import Button from '@mui/material/Button';
import { IMaskInput } from 'react-imask';
import Box from '@mui/material/Box';

const theme1 = createTheme({
  typography: {
    fontFamily: ['"Segoe UI Symbol"'].join(","),
    fontSize: 24,
  },
  palette: {
    primary: { main: "#ffffff" }, // this changes the textbox to white

    background: {
      default: "#13265C", //changes whole page background to dark blue
    },
    
  },

  
});

const buttonStyle = 
{
  "&:hover":{
      background: "Green",
      border: "1px solid black",
      color: "White"
  }
}

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000-00-0000"
     
    />
  );
});


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
     
        

          <TextField
        InputProps={{
          inputComponent: TextMaskCustom //textmaskcustom breaks onChange below, need to fix
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
            onKeyDown={(event) => {
              if (!ALPHA_NUMERIC_DASH_REGEX.test(event.key) && event.key !== "Backspace") 
              {
                
                  /* regex code above wont work with backspace*/
                event.preventDefault();
              } else if (value.length === 9 && event.key !== "Backspace") {
                event.preventDefault();
              }

            }}
            
          
            error={value.length < 9 && value.length !== 0}
            id="filled-basic"
            label="Social Security #"
            variant="outlined"
            sx={{ input: { color: "white" } }}

            
           
          />
   <br /> 

   <Box sx={{
        
        height: 1000, //just a quick fix for now, TODO: find a way to set it to the height of the page
        backgroundColor: '#66ccff', //placeholder, TODO: discuss nice colors w/ group
        margin: 'auto', //this pushes the width to the page size and centers the text
      
      }
    } >
   <Button sx={buttonStyle} variant="contained" disabled={btnDisabled} size = "large">Enter</Button> {/*button size warped, fix later*/}
        <h6>Note: Alphabetical and Special Characters are not allowed. Ex. A-Z !@#$%</h6>
        <h6>Glory to Arstotzka.</h6>

   </Box>

    
        </Typography>
      </div>
    </ThemeProvider>
    
    
    
  );
};

export default Maspage;