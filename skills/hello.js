 
module.exports = function(controller) {
controller.hears(['hello', 'hi', 'howdy', 'hey'], 'direct_message,direct_mention', function(bot, message) {

        bot.startConversation(message, function(err, convo) {
            //convo.say('This is an example of using convo.ask with a single callback.');
            convo.say('Hi there! Type \'help\' to see my list of commands!')
            convo.next();

        });

    });
}
  