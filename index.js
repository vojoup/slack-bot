const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
  token: 'xoxb-378824646069-378690806418-3oiMN2e0D9QLMdRVQxle4PkJ',
  name: 'JokeBot'
});


bot.on('start', () => {
  sendMessage('Cavinky :smiley:');
});

bot.on('error', err => console.error(err));

bot.on('message', data => {
  if (data.type !== 'message') {
    return;
  }
  handleMessage(data.text);
  console.log(data);
});

function handleMessage(message) {
  if (message.includes(' cavinky')) {
    sendMessage('Blem');
  }
}

function sendMessage(messageContent) {
  const params = {
    icon_emoji: ':cat:'
  };

  bot.postMessageToChannel('general', messageContent, params);
}