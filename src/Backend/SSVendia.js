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

async function getFullName(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || SSInfo.items[0] === null){
        return "Not Found."
    }else{
        return SSInfo.items[0].Fname + " " + SSInfo.items[0].MName + " " + SSInfo.items[0].LName;
    }
}

async function getPerson(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    return SSInfo;
}
async function getDOB(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    })
    if(targetSSN === 0 || SSInfo.items[0] === null){
        return "Not Found."
    }else{
        return SSInfo.items[0].BirthMonth+ "/" + SSInfo.items[0].BirthDay + "/" + SSInfo.items[0].BirthYear;
    }
}

export{getFullName, getDOB, getPerson};
