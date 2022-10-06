import { createVendiaClient } from "@vendia/client";
import React, {usestate} from 'react';

async function getInfo(){
    const client = createVendiaClient({
        apiUrl: 'https://6p0uz46bt4.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://q2mucbaqn1.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: 'FHhVsV2Gm1L2yxGyfCev1q1j5mRhyUAcLNfF3XBKfMTK',
    });
    const {entities} = client;
    const ssList = await entities.SS.list();
    alert("Sample Query from Vendia. Taking the first person from the table of SS. \nName: "+ ssList.items[0].FName +" " + ssList.items[0].LName + "\nSSN: "+ ssList.items[0].SSN +"\nDOB: " +ssList.items[0].BirthMonth+"/"+ssList.items[0].BirthDay+"/"+ssList.items[0].BirthYear);
}

export{getInfo};
