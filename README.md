# WhatsAppGroupTag

<h2> Summary </h2>

<p>This repo is a script file that will tag all members of a group at one go. (currently needs fixing) using whatsapp web in JS </p>

<h2> API CREDITS </h2>

<h3> Shoutout to @pedroslopez for their API wrapper for whatsapp. Here is the link for the main repo it has so much functionality and methods <h3>
<ul>Here are the links for the repo and information by @pedroslopez </h3>
<li> REPO: https://github.com/pedroslopez/whatsapp-web.js  </li>
<li> Reference: https://pedroslopez.me/whatsapp-web.js/ </li>
<li> Guide: https://waguide.pedroslopez.me/ </li>
</ul>

<h2> Intro/Installation </h2>

<ol>
<li> <strong> npm i whatsapp-web.js </strong></li>
<li> <strong>  npm i qrcode-terminal </strong></li>
<li> Clone the repository </li>
<li> Then run node index.js </li>
</ol>

<h2>Current workings: </h2>

<ul>
<li>Use "@everyone" and it will work with everyone</li>
<li>Use @league (only works for the boys)  

<li> (Constructing) Use "FbotOn" then type "Create". ---> this makes the bot ask you to create a label group make sure to answer correctly to the props on your group chat</li>
</ul>

<h2>Fixes:</h2>

Needed to move from local object storage to file storage of labels per Group:

Plan on doing this using a file entry of JSON objects using the JSON parser
