import { createVendiaClient } from "@vendia/client";

async function getName(searchedSSN){
    alert("Creating client");
    const client = createVendiaClient({
        apiUrl: 'https://6p0uz46bt4.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://q2mucbaqn1.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: process.env.recycle,
    });
    const {entities} = client;
    alert("Client created, getting list of entities");
    const ssList = await entities.SS.list();
    alert("Finished getting list, first name of the second person:" + ssList[1].FName);
    alert("Getting a person:");
    const person = await client.entities.SS.get("0183637e-4873-f336-b916-85a25d0c820a");
    alert("Finished getting the person, getting name");
    alert(person.FName);
    const addPerson = await entities.SS.add({
        SSN: 12345678,
        FName: "Jack",
        MName: "And",
        LName: "Jill",
        BirthDay: 13,
        BirthMonth: 4,
        BirthYear: 2,
    });
}

export{getName};
