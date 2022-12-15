import { createVendiaClient } from "@vendia/client";

/**
 * Gets Entites from the vendia client, gives access
 * @returns entities
 */
function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://2jzhylau9j.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://mrjq3w2t6g.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '9rVyckXneYKt2RWDKmSCoDBCsDfn6X5czg2mwrrpBxJj',
    });
    const {entities} = client;
    return entities;
}

/**
 * Gets storage from the vendia client, gives access
 * @returns entities
 */
function getStorage(){
    const client = createVendiaClient({
        apiUrl: 'https://2jzhylau9j.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://mrjq3w2t6g.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '9rVyckXneYKt2RWDKmSCoDBCsDfn6X5czg2mwrrpBxJj',
    });
    const {storage} = client;
    return storage;
}

/**
 * 
 * @param targetSSN, SSN given 
 * @returns Person if found using the given SSN as filter
 */
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

/**
 * 
 * @param targetSSN, ssn given 
 * @returns url if, exists
 */
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

//Functions below return strings in format needed for the website.
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

function getURL(){
    return sessionStorage.getItem('SDPhoto');
}
export{getFullName, getDOB, getPassportNumber, getPassportExpiration, getSDPicture, getSDPerson, getURL};