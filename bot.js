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
  //let arguments = splitCommand.slice(1)

  console.log("Command received: " +primaryCommand)

  if (primaryCommand == "Kyle") {
    postPic()
  } else {
    receivedMessage.channel.send("I don't understand the command. Try `!Kyle`")
  }
}

function postPic() {
  pic = `./kyle${Math.floor(Math.random() * 5)}.jpg`;
  const attachment = new Discord.Attachment(pic);
  client.channels.get("625031775411896330").send(attachment);
}



client.login(token)
