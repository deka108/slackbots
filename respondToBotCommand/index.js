// Initialize using signing secret from environment variables
const { createEventAdapter } = require('@slack/events-api');
const { WebClient } = require('@slack/client');

const dotenv = require('dotenv');
dotenv.config();

const slackEvents = createEventAdapter(process.env.SLACK_SIGNING_SECRET);
const token = process.env.SLACK_BOT_TOKEN;
const port = process.env.PORT || 3000;

const randomMessages = [
    "It does not matter how slowly you go as long as you do not stop - Confucius",
    "It always seems impossible until it's done - Nelson Mandela",
    "A will finds a way - Orison Swett Marden",
    "If you can dream it, you can do it - Walt Disney",
    "Without hard work, nothing grows but weeds - Gordon B. Hinckley"
]

const web = new WebClient(token);

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on('message', (event) => {
//   console.log(`Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`);
//   console.log(event);

  const { bot_id, channel } = event;
  if (!!bot_id){
      if (bot_id === process.env.SLACK_BOT_ID){
          console.log("respondToCommand - we detect the slackbot message!");
          let randomMessage = randomMessages[Math.floor(Math.random()*randomMessages.length)];

          if(!!channel){
            console.log(`respondToCommand - sending "${randomMessage}" to channel ${channel}...`);
            (async () => {
                // See: https://api.slack.com/methods/chat.postMessage
                const res = await web.chat.postMessage({ channel: channel, text: randomMessage });
              
                // `res` contains information about the posted message
                console.log(`respondToCommand - Message sent: ${res.ts}`);
              })();
          }
      }
  }
});

// Handle errors (see `errorCodes` export)
slackEvents.on('error', console.error);

// Start a basic HTTP server
slackEvents.start(port).then(() => {
  console.log(`server listening on port ${port}`);
});