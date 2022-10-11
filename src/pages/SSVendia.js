import { createVendiaClient } from "@vendia/client";
import React, {usestate} from 'react';

async function getInfo(){
    const client = createVendiaClient({
        apiUrl: 'https://u37dhzkua2.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://jrwjk1n6i5.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: 'FfY2UP32dDLUDwi59txHsP2grdvv9LzoBgBa3tncperw',
    });
    const {entities} = client;
    const ssList = await entities.SS.list();
    alert("Sample Query from Vendia. Taking the first person from the table of SS. \nName: "+ ssList.items[0].FName +" " + ssList.items[0].LName + "\nSSN: "+ ssList.items[0].SSN +"\nDOB: " +ssList.items[0].BirthMonth+"/"+ssList.items[0].BirthDay+"/"+ssList.items[0].BirthYear);
}
//hello
export{getInfo};
