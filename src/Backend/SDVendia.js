import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://2jzhylau9j.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://mrjq3w2t6g.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '5sjc4LLW4n5DvbLVyg8em2XSj6TQnSeWxoHBm2sx79ge',
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