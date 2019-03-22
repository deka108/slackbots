const { WebClient } = require('@slack/client');

const randomMessages = [
  "It does not matter how slowly you go as long as you do not stop - Confucius",
  "It always seems impossible until it's done - Nelson Mandela",
  "A will finds a way - Orison Swett Marden",
  "If you can dream it, you can do it - Walt Disney",
  "Without hard work, nothing grows but weeds - Gordon B. Hinckley"
]  

const web = new WebClient(process.env.SLACK_ACCESS_TOKEN);

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} request HTTP request context.
 * @param {!express:Response} response HTTP response context.
 */
exports.respondToBot = (request, response) => {
  const { event } = request.body;
  if (!!event){
    const { bot_id, channel } = event;
    if (!!bot_id){
      if (bot_id === process.env.SLACKBOT_ID){
        console.log("respondToBot - we detect the slackbot message!");
        let randomMessage = randomMessages[Math.floor(Math.random()*randomMessages.length)];
  
        if(!!channel){
          console.log(`respondToBot - sending "${randomMessage}" to channel ${channel}...`);
          (async () => {
            // See: https://api.slack.com/methods/chat.postMessage
            const res = await web.chat.postMessage({ channel: channel, text: randomMessage });
  
            // `res` contains information about the posted message
            console.log(`respondToBot - Message sent: ${res.ts}`);
          })();
        }
      }
    }
  }
  
  response.status(200).send(request.body);
};