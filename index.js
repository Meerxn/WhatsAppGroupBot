const qrcode = require('qrcode-terminal');
const fs = require('fs');

const { Client } = require('whatsapp-web.js');
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





client.on('message', async (msg) => {
    if(msg.body === 'tester') {
        recentsB = []
        
      
        

        mainC =  await msg.getContact();
    
            
        const chat = await msg.getChat();
        


        chat.sendMessage("Hello " + mainC.pushname+ " " + "This is the group category tagging bot. It has the ability to tag people based on different labels. If you do not see tags this could mean that this is not a group chat please make sure to use the bot with a group chat");
        


        

        
        if (chat.isGroup){
        let text = "";
        let mentions = [];
        let mentions2 = [];
        let text2 = "";
        console.log(chat.participants);

        for(let participant of chat.participants) {

            
            
            const contact = await client.getContactById(participant.id._serialized);
            //if (contact.name === 'Krishang UK'){

            
            mentions.push(contact);
            text += `@${participant.id.user} `;

           // }
           
        }
        console.log(text);
        chat.sendMessage(text,{mentions});
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
    
    
    
}
    }



});