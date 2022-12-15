import {getSSPerson, getFullName as getSSFullName, getDOB as getSSDOB} from './SSVendia';
import {getDMVPerson, getDMVPicture, getFullName as getDMVFullName, getDOB as getDMVDOB} from './DMVVendia';
import {getSDPerson, getSDPicture, getFullName as getSDFullName, getDOB as getSDDOB} from './SDVendia';
import {useEffect, useState} from 'react';
/**
 * Given SSN, gets the person from the Vendia class and updates information using it.
 * If null, sets everything to null and flags an error.
 * Tells when it is finished loading
 * @param {*} SSN 
 */
function DMV(SSN){
    const [FName, setFName] = useState(" ");
    const [MName, setMName] = useState(" ");
    const [LName, setLName] = useState(" ");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    const [DLNum, setDLNum] = useState(" ");
    const [Photo, setPhoto] = useState();
    const [FinishedLoading, updateFinishedLoading] = useState(0);

    if(FinishedLoading === 0){
        getDMVPerson(SSN).then((person) => {
            try{
                setAttribute(setFName, person.Fname);
                setAttribute(setMName, person.MName);
                setAttribute(setLName, person.LName);
                setAttribute(setBirthDay, person.BirthDay);
                setAttribute(setBirthMonth, person.BirthMonth);
                setAttribute(setBirthYear, person.BirthYear);
                setAttribute(setDLNum, person.LicenseNumber);
            }catch(e){
                setAttribute(setFName, null);
                setAttribute(setMName, null);
                setAttribute(setLName, null);
                setAttribute(setBirthDay, null);
                setAttribute(setBirthMonth, null);
                setAttribute(setBirthYear, null);
                setAttribute(setDLNum, null);
                sessionStorage.setItem("errorDMV", "true");
                sessionStorage.setItem("error", "true");
            }
        })
        getDMVPicture(SSN).then((picture) => {
            try{
                setPhoto(picture);
            }catch(e){
                setPhoto(null);
                sessionStorage.setItem("errorDMV", "true");
            }
        })
    }
    useEffect(() => {
        updateFinishedLoading(FinishedLoading + 1);
        if(FinishedLoading === 8){
            sessionStorage.setItem("DMVFName", FName);
            sessionStorage.setItem("DMVMName", MName);
            sessionStorage.setItem("DMVLName", LName);
            sessionStorage.setItem("DMVBirthDay", BirthDay);
            sessionStorage.setItem("DMVBirthMonth", BirthMonth);
            sessionStorage.setItem("DMVBirthYear", BirthYear);
            sessionStorage.setItem("DMVDLNum", DLNum);
            sessionStorage.setItem("DMVPhoto", Photo);
            sessionStorage.setItem("DMVLoad", "true");
        }
    }, [FName, MName, LName, BirthDay, BirthMonth, BirthYear, DLNum, Photo]);
}

/**
 * Given SSN, gets the person from the Vendia class and updates information using it.
 * If null, sets everything to null and flags an error.
 * Tells when it is finished loading
 * @param {*} SSN 
 */
function SocialSecurity(SSN){
    const [FName, setFName] = useState(" ");
    const [MName, setMName] = useState(" ");
    const [LName, setLName] = useState(" ");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    const [FinishedLoading, updateFinishedLoading] = useState(0);
    if (FinishedLoading === 0){
        getSSPerson(SSN).then((person) => {
            try{
                setAttribute(setFName, person.Fname);
                setAttribute(setMName, person.MName);
                setAttribute(setLName, person.LName);
                setAttribute(setBirthDay, person.BirthDay);
                setAttribute(setBirthMonth, person.BirthMonth);
                setAttribute(setBirthYear, person.BirthYear);
            }catch(e){
                setAttribute(setFName, null);
                setAttribute(setMName, null);
                setAttribute(setLName, null);
                setAttribute(setBirthDay, null);
                setAttribute(setBirthMonth, null);
                setAttribute(setBirthYear, null);
                sessionStorage.setItem("errorSS", "true");
                sessionStorage.setItem("error", "true");
            }
        })
    }
    useEffect(() => {
        updateFinishedLoading(FinishedLoading + 1);
        if(FinishedLoading === 6){
            sessionStorage.setItem("SSFName", FName);
            sessionStorage.setItem("SSMName", MName);
            sessionStorage.setItem("SSLName", LName);
            sessionStorage.setItem("SSBirthDay", BirthDay);
            sessionStorage.setItem("SSBirthMonth", BirthMonth);
            sessionStorage.setItem("SSBirthYear", BirthYear);
            sessionStorage.setItem("SSLoad", "true");
        }
    }, [FName, MName, LName, BirthDay, BirthMonth, BirthYear]);
}

/**
 * Given SSN, gets the person from the Vendia class and updates information using it.
 * If null, sets everything to null and flags an error.
 * Tells when it is finished loading
 * @param {*} SSN 
 */
function StateDepartment(SSN) {
    const [FName, setFName] = useState(" ");
    const [MName, setMName] = useState(" ");
    const [LName, setLName] = useState(" ");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    const [ExpirationDay, setExpirationDay] = useState(0);
    const [ExpirationMonth, setExpirationMonth] = useState(0);
    const [ExpirationYear, setExpirationYear] = useState(0);
    const [PassportNumber, setPassportNumber] = useState(" ");
    const [Photo, setPhoto] = useState(" ");
    const [FinishedLoading, updateFinishedLoading] = useState(0);

    if(FinishedLoading === 0){
        getSDPerson(SSN).then((person) => {
            try{
                setAttribute(setFName, person.Fname);
                setAttribute(setMName, person.MName);
                setAttribute(setLName, person.LName);
                setAttribute(setBirthDay, person.BirthDay);
                setAttribute(setBirthMonth, person.BirthMonth);
                setAttribute(setBirthYear, person.BirthYear);
                setAttribute(setExpirationDay, person.PassportExpirationDay);
                setAttribute(setExpirationMonth, person.PassportExpirationMonth);
                setAttribute(setExpirationYear, person.PassportExpirationYear);
                setAttribute(setPassportNumber, person.PassportNumber);
            }catch(e){
                setAttribute(setFName, null);
                setAttribute(setMName, null);
                setAttribute(setLName, null);
                setAttribute(setBirthDay, null);
                setAttribute(setBirthMonth, null);
                setAttribute(setBirthYear, null);
                setAttribute(setExpirationDay, null);
                setAttribute(setExpirationMonth, null);
                setAttribute(setExpirationYear, null);
                setAttribute(setPassportNumber, null);
                sessionStorage.setItem("errorSD", "true");
                sessionStorage.setItem("error", "true");
            }

        })
        getSDPicture(SSN).then((picture) => {
            console.log("in picture method SD");
            try{
                setPhoto(picture);
            }catch(e){
                setPhoto(null);
                sessionStorage.setItem("errorSD", "true");
            }
        })
    }
    useEffect(() => {
        updateFinishedLoading(FinishedLoading + 1);
        if(FinishedLoading === 11){
            sessionStorage.setItem("SDFName", FName);
            sessionStorage.setItem("SDMName", MName);
            sessionStorage.setItem("SDLName", LName);
            sessionStorage.setItem("SDBirthDay", BirthDay);
            sessionStorage.setItem("SDBirthMonth", BirthMonth);
            sessionStorage.setItem("SDBirthYear", BirthYear);
            sessionStorage.setItem("SDExpirationDay", ExpirationDay);
            sessionStorage.setItem("SDExpirationMonth", ExpirationMonth);
            sessionStorage.setItem("SDExpirationYear", ExpirationYear);
            sessionStorage.setItem("SDPassportNumber", PassportNumber);
            sessionStorage.setItem("SDPhoto", Photo);
            sessionStorage.setItem("SDLoad", "true");
        }
        if(FinishedLoading === 10 && sessionStorage.getItem("errorSD") === true){
            sessionStorage.setItem("SDLoad", "true");
        }
    }, [FName, MName, LName, BirthDay, BirthMonth, BirthYear, ExpirationDay, ExpirationMonth, ExpirationYear, PassportNumber, Photo]);
}

/**
 * Person created, calls method to start creating the information, also has it's own checkers to check data when done.
 * @param {*} ssn 
 */
export function Person(ssn){
        SocialSecurity(ssn);
        StateDepartment(ssn);
        DMV(ssn);
        sessionStorage.setItem("allMatch", "true");
    this.dataCheck = () => {
        this.checker(getDMVFullName(), getSDFullName(), "DMV_SD_Name_Match");
        this.checker(getDMVFullName(), getSSFullName(), "DMV_SS_Name_Match");
        this.checker(getSSFullName(), getSDFullName(), "SS_SD_Name_Match");
        this.checker(getDMVDOB(), getSDDOB(), "DMV_SD_DOB_Match");
        this.checker(getDMVDOB(), getSSDOB(), "DMV_SS_DOB_Match");
        this.checker(getSSDOB(), getSDDOB(), "SS_SD_DOB_Match");
    }
    this.checker = (a, b, keyString) => {
    if(a === b){
        sessionStorage.setItem(keyString, "true");
    }else{
        sessionStorage.setItem(keyString, "false");
        sessionStorage.setItem("allMatch", "false");
        }
    }
}

/**
 * Helper method, takes the update method of a state method and the attribute and sets it. If it's null it sets it to blank.
 * @param {} setMethod 
 * @param {*} attribute 
 */
function setAttribute(setMethod, attribute){
        if(attribute !== null){
            setMethod(attribute);
        }else{
            setMethod("");
        }
}