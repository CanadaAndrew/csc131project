import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://h7xxo96s3d.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://u7albru10e.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '2Nd6zVuRi8b1udqHnfDDCfEYAYkaqqAyJC54M5hkCi7Y',
    });
    const {entities} = client;
    return entities;
}

function getFullName(){
    return sessionStorage.getItem('SSFName') + " " + sessionStorage.getItem('SSMName') + " " + sessionStorage.getItem('SSLName');
}

async function getSSPerson(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    return SSInfo.items[0];
}

function getDOB(){
   return sessionStorage.getItem('SSBirthMonth') + "/" + sessionStorage.getItem('SSBirthDay') + "/" + sessionStorage.getItem('SSBirthYear');
}

export{getFullName, getDOB, getSSPerson};
