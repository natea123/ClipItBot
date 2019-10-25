/*
This is a simple Discord bot written by me to practice my JavaScript.

As of this commit it just posts a random picture into the Discord server chat
but will continue to iterate and expand its uses. Using Node as well to improve
knowledge. Also plan to host this on a Raspberry Pi.

*/

const Discord = require('discord.js')
const client = new Discord.Client()

client.on('message', (receivedMessage) => {
  if (receivedMessage.author == client.user) {
    return
  }
  if (receivedMessage.content.startsWith("!")) {
    processCommand(receivedMessage)
  }
})

function processCommand(receivedMessage) {
  let fullCommand = receivedMessage.content.substr(1)
  let splitCommand = fullCommand.split(" ")
  let primaryCommand = splitCommand[0]
  //let arguments = splitCommand.slice(1) (will use later when additional flags can be passed to commands)

  console.log("Command received: " +primaryCommand)

  if (primaryCommand == "pic") {
    postPic()
  } else {
    receivedMessage.channel.send("I don't understand the command. Try `!pic`")
  }
}

function postPic() {
  pic = `./pic${Math.floor(Math.random() * 6)}.jpg`; //Picks one of 5 pictures hosted in the scripts directory
  const attachment = new Discord.Attachment(pic);
  client.channels.get(channelID).send(attachment); //replace with Discord channel id
}



client.login(authToken) //replace with auth token
