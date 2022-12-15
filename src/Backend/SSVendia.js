import { createVendiaClient } from "@vendia/client";
/**
 * Gets Entites from the vendia client, gives access
 * @returns entities
 */
function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://h7xxo96s3d.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://u7albru10e.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '2Nd6zVuRi8b1udqHnfDDCfEYAYkaqqAyJC54M5hkCi7Y',
    });
    const {entities} = client;
    return entities;
}

/**
 * 
 * @param targetSSN, SSN given 
 * @returns Person if found using the given SSN as filter
 */
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

//Functions below return strings in format needed for the website.
function getFullName(){
    return sessionStorage.getItem('SSFName') + " " + sessionStorage.getItem('SSMName') + " " + sessionStorage.getItem('SSLName');
}

function getDOB(){
   return sessionStorage.getItem('SSBirthMonth') + "/" + sessionStorage.getItem('SSBirthDay') + "/" + sessionStorage.getItem('SSBirthYear');
}

export{getFullName, getDOB, getSSPerson};
