import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://a7ev0b25sf.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://theuy9nec6.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '4VsmBT7rotFKV7BXyHBTEQk3QrGSEg8Qq1Z5gJxMyWEV',
    });
    const {entities} = client;
    return entities;
}

async function getFullName(targetSSN){
    const entities = getEntities();
    const dmvInfo = await entities.DMV.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || dmvInfo.items[0] === null){
        return "Not Found."
    }else{
        return dmvInfo.items[0].Fname + " " + dmvInfo.items[0].MName + " " + dmvInfo.items[0].LName;
    }
}

async function getDOB(targetSSN){
    const entities = getEntities();
    const dmvInfo = await entities.DMV.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || dmvInfo.items[0] === null){
        return "Not Found."
    } else{
        return dmvInfo.items[0].BirthMonth+ "/" + dmvInfo.items[0].BirthDay + "/" + dmvInfo.items[0].BirthYear;
    }
}

async function getLicenseNumber(targetSSN){
    const entities = getEntities();
    const dmvInfo = await entities.DMV.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || dmvInfo.items[0] === null){
        return "Not Found."
    }else{
        return dmvInfo.items[0].LicenseNumber;
    }
}

export{getFullName, getDOB, getLicenseNumber};