import { createVendiaClient } from "@vendia/client";

function getEntities(){
    const client = createVendiaClient({
        apiUrl: 'https://m9dx4kcqul.execute-api.us-west-1.amazonaws.com/graphql/',
        websocketUrl: 'wss://52rh2zpv54.execute-api.us-west-1.amazonaws.com/graphql',
        apiKey: '2JvF4s14NUcDwPBCKxRLu98sppyryRx2Z7RcnvTmWjvD',
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