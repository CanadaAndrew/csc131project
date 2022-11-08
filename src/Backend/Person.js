import {getPerson} from './SSVendia'
import {useEffect, useState} from 'react'


class DMV {
    constructor(targetPerson){
        this.photo(targetPerson.photo);
        this.dlNum(targetPerson.dlNum);
        this.fName(targetPerson.fName);
        this.mName(targetPerson.MName);
        this.lName(targetPerson.LName);
        this.birthDay(targetPerson.BirthDay);
        this.birthMonth(targetPerson.BirthMonth);
        this.birthYear(targetPerson.BirthYear);
    }

    set photo(photo){
        this.photo = photo;
    }

    set dlNum(dlNum){
        this.dlNum = dlNum;
    }

    set fName(fName){
        this.fName = fName;
    }

    set mName(mName){
        this.mName = mName;
    }

    set lName(lName){
        this.lName = lName;
    }

    set birthDay(birthDay){
        this.birthDay = birthDay;
    }

    set birthMonth(birthMonth){
        this.birthMonth = birthMonth;
    }

    set birthYear(birthYear){
        this.birthYear = birthYear
    }

    get photo() {
        return this.photo;
    }

    get dlNum() {
        return this.dlNum;
    }

    get FName() {
        return this.fName;
    }

    get MName() {
        return this.mName;
    }

    get LName() {
        return this.lName;
    }

    get FullName() {
        return this.fName + " " + this.mName + " " + this.lName;
    }

    get BirthDay() {
        return this.birthDay;
    }

    get BirthMonth() {
        return this.birthMonth;
    }

    get BirthYear() {
        return this.birthYear;
    }
}

/*
class SocialSecurity {
    constructor(targetPerson){
        alert("In constructor");
        this.fName(targetPerson.fname);
        this.mName(targetPerson.MName);
        this.lName(targetPerson.LName);
        this.birthDay(targetPerson.BirthDay);
        this.birthMonth(targetPerson.BirthMonth);
        this.birthYear(targetPerson.BirthYear);
    }

    set fName(fName){
        this.fName = fName;
    }

    set mName(mName){
        this.mName = mName;
    }

    set lName(lName){
        this.lName = lName;
    }

    set birthDay(birthDay){
        this.birthDay = birthDay;
    }

    set birthMonth(birthMonth){
        this.birthMonth = birthMonth;
    }

    set birthYear(birthYear){
        this.birthYear = birthYear
    }

    get FName() {
        return this.fName;
    }

    get MName() {
        return this.mName;
    }

    get LName() {
        return this.lName;
    }

    get FullName() {
        return this.fName + " " + this.mName + " " + this.lName;
    }

    get BirthDay() {
        return this.birthDay;
    }

    get BirthMonth() {
        return this.birthMonth;
    }

    get BirthYear() {
        return this.birthYear;
    }
} 
*/

function SocialSecurity(SSN){
    const [FName, setFName] = useState("");
    const [MName, setMName] = useState("");
    const [LName, setLName] = useState("");
    const [BirthDay, setBirthDay] = useState(0);
    const [BirthMonth, setBirthMonth] = useState(0);
    const [BirthYear, setBirthYear] = useState(0);
    getPerson(SSN).then((person) => {
        setFName(person.Fname);
        setMName(person.MName);
        setLName(person.LName);
        setBirthDay(person.BirthDay);
        setBirthMonth(person.BirthMonth);
        setBirthYear(person.BirthYear);
    })

    /*
     this.getFullName = () => {
        return FName + " " + MName + " " + LName;
    }

     this.getBirthDate = () => {
        return BirthDay + "/" + BirthMonth + "/" + BirthYear;
    }
    */
}

function Person(ssn){
    this.ssn = ssn;
    console.log(this.ssn);
}

/*
class Person {
    ssInfo;
    constructor(ssn) {
        this.ssn = ssn;
        this.ssInfo = SocialSecurity(ssn);
    }
    //Methods
    get SSN() {
        return this.ssn;
    }

}
*/

export {Person};