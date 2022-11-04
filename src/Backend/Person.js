import {getPerson} from './SSVendia'
import {useState} from 'react'


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


class Person {
    ssInfo;
    constructor(ssn) {
        this.ssn = ssn;
        //let ssInfo = new SocialSecurity("Adrian", "James", "Gonzalez", 0, "", 0);
        //this.ssInfo = new SocialSecurity("Adrian", "James", "Gonzalez", 27, "April", 2002);
        

        //this.ssInfo(new SocialSecurity(GettingThePerson(ssn).items[0]));
    }

    set ssInfo(ssInfo){
        this.ssInfo = ssInfo;
    }
    //Methods
    get SSN() {
        return this.ssn;
    }

}

function GettingThePerson(ssn){
    const [thePerson, updatePerson] = useState(null);
    getPerson(ssn).then((targetPerson) => {updatePerson = targetPerson;})
    while(thePerson === null){

    }
    return thePerson;
}

export {Person};