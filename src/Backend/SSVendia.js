import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://g1vncp91zd.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://uc9tjuc2l8.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '6JYTncoTm1BDPyYmcyojLZqjvGop9JcsREhQoM77C2Sv',
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
