import {getSSPerson} from './SSVendia';
import {getDMVPerson, getDMVPicture} from './DMVVendia';
import {getSDPerson, getSDPicture} from './SDVendia';
import {useEffect, useState} from 'react';

function DMV(SSN) {
    const [FName, setFName] = useState("");
    const [MName, setMName] = useState("");
    const [LName, setLName] = useState("");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    const [DLNum, setDLNum] = useState("");
    const [Photo, setPhoto] = useState();
    const [FinishedLoading, updateFinishedLoading] = useState(0);
    getDMVPerson(SSN).then((person) => {
        setFName(person.Fname);
        setMName(person.MName);
        setLName(person.LName);
        setBirthDay(person.BirthDay);
        setBirthMonth(person.BirthMonth);
        setBirthYear(person.BirthYear);
        setDLNum(person.LicenseNumber);
    })
    if(FinishedLoading === 0){
        getDMVPicture(SSN).then((picture) => {
            setPhoto(picture);
        })
    }
    useEffect(() => {
        updateFinishedLoading(FinishedLoading + 1);
        console.log("DMV"+FinishedLoading);
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
function SocialSecurity(SSN){
    const [FName, setFName] = useState("");
    const [MName, setMName] = useState("");
    const [LName, setLName] = useState("");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    const [FinishedLoading, updateFinishedLoading] = useState(0);
    if (FinishedLoading < 6){
        getSSPerson(SSN).then((person) => {
            setFName(person.Fname);
            setMName(person.MName);
            setLName(person.LName);
            setBirthDay(person.BirthDay);
            setBirthMonth(person.BirthMonth);
            setBirthYear(person.BirthYear);
        })
    }
    useEffect(() => {
        updateFinishedLoading(FinishedLoading + 1);
        console.log("SS"+FinishedLoading);
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

function StateDepartment(SSN) {
    const [FName, setFName] = useState("");
    const [MName, setMName] = useState("");
    const [LName, setLName] = useState("");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    const [ExpirationDay, setExpirationDay] = useState(0);
    const [ExpirationMonth, setExpirationMonth] = useState(0);
    const [ExpirationYear, setExpirationYear] = useState(0);
    const [PassportNumber, setPassportNumber] = useState("");
    const [Photo, setPhoto] = useState();
    const [FinishedLoading, updateFinishedLoading] = useState(0);
    getSDPerson(SSN).then((person) => {
        setFName(person.Fname);
        setMName(person.MName);
        setLName(person.LName);
        setBirthDay(person.BirthDay);
        setBirthMonth(person.BirthMonth);
        setBirthYear(person.BirthYear);
        setExpirationDay(person.PassportExpirationDay);
        setExpirationMonth(person.PassportExpirationMonth);
        setExpirationYear(person.PassportExpirationYear);
        setPassportNumber(person.PassportNumber);
    })
    if(FinishedLoading === 0){
        getSDPicture(SSN).then((picture) => {
            setPhoto(picture);
        })
    }
    useEffect(() => {
        updateFinishedLoading(FinishedLoading + 1);
        console.log("SD"+FinishedLoading);
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
    }, [FName, MName, LName, BirthDay, BirthMonth, BirthYear, ExpirationDay, ExpirationMonth, ExpirationYear, PassportNumber, Photo]);
}

export function Person(ssn){
    this.doneLoading = false;
    this.ssn = ssn;
    this.SSInfo = new SocialSecurity(this.ssn);
    this.SDInfo = new StateDepartment(this.ssn);
    this.DMVInfo = new DMV(this.ssn);
    console.log(this.ssn);
}




/*
class Person {
    ssInfo;
    constructor(ssn) {
        this.ssn = ssn;
        //this.ssInfo = SocialSecurity(ssn);
        alert("Leaving constructor");
    }
    //Methods
    get SSN() {
        return this.ssn;
    }

}
*/


