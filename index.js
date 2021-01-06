const qrcode = require('qrcode-terminal');
const fs = require('fs');

const { Client } = require('whatsapp-web.js');
const { homedir } = require('os');
//const client = new Client();
const SESSION_FILE_PATH = './session.json';

// Load the session data if it has been previously saved
let sessionData;
if(fs.existsSync(SESSION_FILE_PATH)) {
    sessionData = require(SESSION_FILE_PATH);
}

// Use the saved values
const client = new Client({
    session: sessionData
});

// Save session values to the file upon successful auth
client.on('authenticated', (session) => {
    sessionData = session;
    fs.writeFile(SESSION_FILE_PATH, JSON.stringify(session), function (err) {
        if (err) {
            console.error(err);
        }
    });
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.initialize();



var groupType = "";

client.on('message' , async(msg) =>{
 
 if (msg.body === "create_label"){
    var count  = 0
    

    

    chat = await msg.getChat();
    var nm = chat.name;
    counter = 0  
    
    userList  = [];
    
    for (let usr of chat.participants){
        console.log()
        

        const contact = await client.getContactById(usr.id._serialized);
        console.log(contact);
        userList.push(contact.pushname);
        console.log(userList);
        

    }
    if (counter === 0 ){
        ho(msg,chat)
    }
    
    
    

    chat.sendMessage("Please state the name of the label");
    client.on('message' , async(message) =>{
        chat = await message.getChat();
        if (chat.name ===  nm && count === 0 ) {

        chat.sendMessage("Please choose the users that you want for " + message.body + "by typing 1 if you want this user and 0 if you dont. Suppose There are 2 out of 3 users you want to pick type 011 if you want user 2 and 3 but not user 1");
        chat.sendMessage("Here is the assorted user list");
        console.log(userList);
        var users  = "" ;
        for( var i = 0 ; i < userList.length ; i++){
            users = users + " " +  userList[i];
        }
        chat.sendMessage(users)
        
        //chat.sendMessage(userList);
        client.on('message' , async(members) =>{
            
            newLabel = [];
            for (var i = 0 ; i < members.body.length ; i++){

                if (members.body.charAt(i) === "1"){
                    newLabel.push(userList[i]);




                }
            }

            //chat.sendMessage("test tags for now");
            let text = "";
            let mentions = [];
    
            for(let participant of chat.participants) {
                const contact = await client.getContactById(participant.id._serialized);
                for (var j = 0 ; j < newLabel.length ; j++){
                    
                    if (newLabel[j] === contact.name){
                        mentions.push(contact);
                    text += `@${participant.id.user} `;

                    }
                }
                
            }
    
            chat.sendMessage(text, { mentions });
            count = count + 1
            return;

            
            
    
    
            
    
        
        });
    }



        
    });
}

});

function ho(m,c){
    c.sendMessage("blah");
    client.on('message', async(trial) =>{
        if (trial.body === "kkk"){
            c.sendMessage("blahhhh")
            return;

        }
    });
    return;
}
        


  





//EVERYONE TAG
client.on('message', async (msg) => {
    const chat = await msg.getChat();
    if(msg.body === '@everyone') {
        
        
        let text = "";
        let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            
            mentions.push(contact);
            text += `@${participant.id.user} `;
        }

        chat.sendMessage(text, { mentions });
    }



    
    // Hardcoded this list for the lads in my group chat for now 
    if (msg.body === '@league'){
    leagueList = ["Krishang UK", "Craig", "Gabe", "Joshua" , "Yash", "Aru",  "Mahmoud" , "Rylan", "Nazim" , "Sagnik"];
    let text = "";
    let mentions = [];

        for(let participant of chat.participants) {
            const contact = await client.getContactById(participant.id._serialized);
            for(i = 0 ; i < leagueList.length; i++){
                if (contact.name === leagueList[i]){
                    mentions.push(contact);
                    text += `@${participant.id.user} `;
                    break;
                }

            }
            
        }

        chat.sendMessage(text, { mentions });
    }







});














// THIS IS JUST A HARDCODE FOR THE BOYS
// client.on('message', async (msg) => {
//     count = 0
   
//     if(msg.body === '@league') {

//         recentsB = [];

//         leagueList = ["Krishang UK", "Craig", "Gabe", "Joshua" , "Yash", "Aru", "Parth" , "Mahmoud" , "Rylan", "Nazim" , "Sagnik"];
        
      
        

//         mainC =  await msg.getContact();
    
            
//         const chat = await msg.getChat();
        


//         chat.sendMessage("Hello " + mainC.pushname+ " " + "This is the group category tagging bot. It has the ability to tag people based on different labels. If you do not see tags this could mean that this is not a group chat please make sure to use the bot with a group chat");
        


        

        
//         if (chat.isGroup){
//          var mydata = JSON.parse(data);    
        
//         chat.sendMessage("Create a group (yes/no) ? ")
//         cb = -1;

//         count = 0 ;
        //client.on('message', async(message) =>{
            //if (message.body === 'yes'){
                //cb = 1;
                //console.log("true1");
                
           // }
            // if (message.body === "no"){
            //     chat.sendMessage("Please use an existing tag");

            // }

            // if (cb == 1){
            //     newL = {};
            //     newName = "";
            //     flagger = 0;
                //chat.sendMessage("Please state your tag label name");
            //     client.on('message', async(newmsg) =>{
            //         for (i = 0; i < mydata ; i++){
            //             if (newmsg.body === mydata.name){
            //                 flagger = 1;
                            

            //             } 
            //             if (flagger === 1){
            //                 chat.sendMessage("Name already exists");
            //             }
            //             else{
            //                 newL.name



            //             }

            //         }
                    
                    

            //     });



            // }
            // let text = "";
            // let mentions = [];
            // let mentions2 = [];
            // let text2 = "";
            // console.log(chat.participants);






    
            // for(let participant of chat.participants) {
    
                
                
            //     const contact = await client.getContactById(participant.id._serialized);
            //    // if(contact.name === "Krishang UK" || contact.name ===  "Craig" || contact.name === "Gabe"|| contact.name === "Joshua"   || contact.name === "Yash"){
                
    
    
            //     console.log(text)
            //     mentions.push(contact);
            //     text += `@${participant.id.user} `;
            //    // }
    
                
               
            
            // if (count === 1){
            // console.log(text);
            // chat.sendMessage(text,{mentions});
            // count = 0;

            // }
            
                

            




        //});


       
        // tArr = text.split(" ");
        // console.log(tArr);
        // textF = tArr[0];
        // mentioni = []
        // mentioni.push(mentions[0])
        // mentioni.push
        // console.log(textF);
        // console.log(mentioni);
        // chat.sendMessage(textF,mentioni[0].id.user);
        // chat.sendMessage(tArr[0],  mentions[0]);
        // console.log(mentioni)
        // console.log(mentions)



        //console.log("mentions" , {mentions});
       // console.log("mentions 2" , {mentions2});

        //console.log("mentions iterate" , mentions[3])
       



        //chat.sendMessage(text, { mentions });
        //chat.sendMessage(text2 , {mentions2});
    
    
    
// }
//     }



// });
