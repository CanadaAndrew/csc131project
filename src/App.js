import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route,} from "react-router-dom"; // Router to link webpages
import Results from "./pages/Results";
import Ssn from "./pages/Ssn";
import Dmv from "./pages/Dmv";
import StateDep from "./pages/StateDep"; 
import Mastpage from "./Mastpage";
 
const App = () => {
    return(
        <div>
         <Router>    {/*Router to link webpages*/}
            <Routes>
               <Route path = "/results" element={<Results/>} /> {/*pathway to results.js page*/}
               <Route path = "/app" element={<App/>} /> {/*pathway to app.js page*/}
               <Route path = "/mastpage" element={<Mastpage/>} /> {/*pathway to mastpage.js page*/}
               <Route path = "/ssn" element={<Ssn/>} /> {/*pathway to Ssn.js page*/}
               <Route path = "/dmv" element={<Dmv/>} /> {/*pathway to Dmv.js page*/}
               <Route path = "/statedep" element={<StateDep/>} /> {/*pathway to StateDep.js page*/}
            </Routes>
         </Router>
        </div>
    )
}

export default App;
