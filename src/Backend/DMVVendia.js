import { createVendiaClient } from "@vendia/client";
/**
 * Gets Entites from the vendia client, gives access
 * @returns entities
 */
function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://a7ev0b25sf.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://theuy9nec6.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '4VsmBT7rotFKV7BXyHBTEQk3QrGSEg8Qq1Z5gJxMyWEV',
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
        apiUrl: 'https://a7ev0b25sf.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://theuy9nec6.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '4VsmBT7rotFKV7BXyHBTEQk3QrGSEg8Qq1Z5gJxMyWEV',
    });
    const {storage} = client;
    return storage;
}

/**
 * 
 * @param targetSSN, SSN given 
 * @returns Person if found using the given SSN as filter
 */
async function getDMVPerson(targetSSN){
    const entities = getEntities();
    const DMVInfo = await entities.DMV.list({
        filter:{
            SSN: {
                contains: ''+targetSSN,
            },
        },
    });
    return DMVInfo.items[0];
}
/**
 * 
 * @param targetSSN, ssn given 
 * @returns url if, exists
 */
async function getDMVPicture(targetSSN){
    const storage = getStorage();
    const getFile = await storage.files.list({
        filter:{
            destinationKey:{
                contains: targetSSN+"DMV",
            },
        }
    })
    try{
        return getFile.items[0].temporaryUrl;
    }catch(e){
        return null;
    }
}

//The Functions below are all formatting functions, used to give the string needed.
function getFullName(){
    return sessionStorage.getItem('DMVFName') + " " + sessionStorage.getItem('DMVMName') + " " + sessionStorage.getItem('DMVLName');
}

function getDOB(targetSSN){
    return sessionStorage.getItem('DMVBirthMonth') + "/" + sessionStorage.getItem('DMVBirthDay') + "/" + sessionStorage.getItem('DMVBirthYear');
}

function getLicenseNumber(targetSSN){
    return sessionStorage.getItem('DMVDLNum');
}

function getURL(){
    return sessionStorage.getItem('DMVPhoto');
}
export{getFullName, getDOB, getLicenseNumber, getDMVPicture, getDMVPerson, getURL};