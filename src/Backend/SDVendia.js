import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://9ge9s5x094.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://fqihmcqm6i.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: 'JAoh5meuWBuKYPGiR3mBvoLYPbt8vSyoBGzC9RqWWrdo',
    });
    const {entities} = client;
    return entities;
}

async function getFullName(targetSSN){
    const entities = getEntities();
    const SDInfo = await entities.SD.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || SDInfo.items[0] === null){
        return "Not Found."
    }else{
        return SDInfo.items[0].Fname + " " + SDInfo.items[0].MName + " " + SDInfo.items[0].LName;
    }
}

async function getDOB(targetSSN){
    const entities = getEntities();
    const SDInfo = await entities.SD.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || SDInfo.items[0] === null){
        return "Not Found."
    } else{
        return SDInfo.items[0].BirthMonth+ "/" + SDInfo.items[0].BirthDay + "/" + SDInfo.items[0].BirthYear;
    }
}

async function getPassportNumber(targetSSN){
    const entities = getEntities();
    const SDInfo = await entities.DMV.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || SDInfo.items[0] === null){
        return "Not Found."
    }else{
        return SDInfo.items[0].PassportNumber;
    }
}

async function getPassportExpiration(targetSSN){
    const entities = getEntities();
    const SDInfo = await entities.SD.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    if(targetSSN === 0 || SDInfo.items[0] === null){
        return "Not Found."
    } else{
        return SDInfo.items[0].PassportExpirationMonth+ "/" + SDInfo.items[0].PassportExpirationDay + "/" + SDInfo.items[0].PassportExpirationYear;
    }
}
export{getFullName, getDOB, getPassportNumber, getPassportExpiration};