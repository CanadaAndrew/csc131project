import { createVendiaClient } from "@vendia/client";

function getName(){
    const client = createVendiaClient({
        apiUrl: '<https://6p0uz46bt4.execute-api.us-west-1.amazonaws.com/graphql/>',
        websocketUrl: '<wss://q2mucbaqn1.execute-api.us-west-1.amazonaws.com/graphql>',
        apiKey: process.env.VENDIA_API_KEY,
    });
    ssTable = client.entities.SS.list();
        for(var i = 0; i < ssTable.length(); i++){
            if(this.ssTable[i].SSN == searchedSSN){
                alert(ssTable[i].FName);
            }
        }
}


return client.entities.SS.list();
    //Generating the information(Temporary)
    

    /*



export{VendiaClient};
*/