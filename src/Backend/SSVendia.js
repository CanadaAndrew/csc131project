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

async function getInfo(){
    const entities = getEntities();
    const ssList = await entities.SS.list();
    alert("Sample Query from Vendia. Taking a person with the SSN of 123456789. \nName: "+ await getFullName("123456789") +"\nDOB: " + await getDOB("123456789"));
}

async function getFName(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                eq: targetSSN,
            }
        },
    });
    return SSInfo.items[0].Fname;
}

async function getMName(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                eq: targetSSN,
            },
        },
    });
    return SSInfo.items[0].MName;
}

async function getLName(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                eq: targetSSN,
            },
        },
    });
    return SSInfo.items[0].LName;
}

async function getFullName(targetSSN){
    return await getFName(targetSSN) + " " + await getMName(targetSSN) + " " + await getLName(targetSSN);
}

async function getDOB(targetSSN){
    const entities = getEntities();
    const SSInfo = await entities.SS.list({
        filter:{
            SSN: {
                eq: targetSSN,
            },
        },
    });
    return SSInfo.items[0].BirthMonth+ "/" + SSInfo.items[0].BirthDay + "/" + SSInfo.items[0].BirthYear;
}

export{getInfo, getFullName, getDOB};
