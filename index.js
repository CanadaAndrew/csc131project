function Person(ssn, fName, mName, lName) {
    this.ssn = ssn;
    this.fName = fName;
    this.mName = mName;
    this.lName = lName;
    console.log('Hi Im a person');
}

const Adrian = new Person(12345678, Adrian, James, Gonzalez);


