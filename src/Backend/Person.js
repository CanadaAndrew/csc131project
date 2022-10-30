class SocialSecurity {
    constructor(fName, mName, lName, birthDay, birthMonth, birthYear) {
        this.fName = fName;
        this.mName = mName;
        this.lName = lName;
        this.birthDay = birthDay;
        this.birthMonth = birthMonth;
        this.birthYear = birthYear;
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
        this.ssInfo = new SocialSecurity("Adrian", "James", "Gonzalez", 27, "April", 2002);
    }

    //Methods
    get SSN() {
        return this.ssn;
    }

}


let Adrian = new Person(123456789);

console.log(Adrian.SSN);
console.log(Adrian.ssInfo.FullName);