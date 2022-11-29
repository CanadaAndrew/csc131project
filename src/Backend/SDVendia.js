import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://2jzhylau9j.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://mrjq3w2t6g.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '9rVyckXneYKt2RWDKmSCoDBCsDfn6X5czg2mwrrpBxJj',
    });
    const {entities} = client;
    return entities;
}

function getStorage(){
    const client = createVendiaClient({
        apiUrl: 'https://2jzhylau9j.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://mrjq3w2t6g.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '9rVyckXneYKt2RWDKmSCoDBCsDfn6X5czg2mwrrpBxJj',
    });
    const {storage} = client;
    return storage;
}

async function getSDPerson(targetSSN){
    const entities = getEntities();
    const SDInfo = await entities.SD.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    return SDInfo.items[0];
}
function getFullName(){
    return sessionStorage.getItem('SDFName') + " " + sessionStorage.getItem('SDMName') + " " + sessionStorage.getItem('SDLName');
}

function getDOB(){
    return sessionStorage.getItem('SDBirthMonth') + "/" + sessionStorage.getItem('SDBirthDay') + "/" + sessionStorage.getItem('SDBirthYear');
}

function getPassportNumber(targetSSN){
    return sessionStorage.getItem('SDPassportNumber');
}

function getPassportExpiration(targetSSN){
    return sessionStorage.getItem('SDExpirationMonth') + "/" + sessionStorage.getItem('SDExpirationDay') + "/" + sessionStorage.getItem('SDExpirationYear');
}

async function getSDPicture(targetSSN){
    const storage = getStorage();
    const getFile = await storage.files.list({
        filter:{
            destinationKey:{
                contains: targetSSN+"SD",
            },
        }
    })
    try{
        return getFile.items[0].temporaryUrl;
    }catch(e){
        return null;
    }
}

function getURL(){
    return sessionStorage.getItem('SDPhoto');
}
export{getFullName, getDOB, getPassportNumber, getPassportExpiration, getSDPicture, getSDPerson, getURL};