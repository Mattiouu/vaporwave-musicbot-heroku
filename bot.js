var Discord = require('discord.io');
var logger = require('Winston');
var auth = require('./auth.json');

//Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize:true
});

logger.level = 'debug';

//Initialize the bot
var bot = new.Discord.Client ({
    token: auth.token,
    autorun:true
});

bot.on('ready', function(evt){
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bor.username + ' - (' + bot.id + ')');
});

bot.on('message', function(user, userID, channelID, message, evt){
    //Bot needs to know if it will execute a command.
    //Bot will listen for messages that starts with an '!'.
    if(message.substring(0, 1) == '!'){
        var args = message.substring(1).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd){
            //!hello
            case 'hello':
                bot.sendMessage({
                    to: channelID
                    message: "Hi, this is the Vaporwave Bot!\nUse the command !vaporcommands for all my commands!"
                });
            break;
            //!vaporcommands
            case 'vaporcommands':
                bot.sendMessage({
                    to: channelID
                    message: "My commands are:\n!hello\n!vaporcommands\n!info\n!youtube\n!squalidjoke1\n!squalidjoke2\n!squalidjoke3\n!mattedits\n!riot\n!davudsan"
                });
            break;
            //!info
            case 'info':
                bot.sendMessage({
                    to: channelID
                    message: "Hi, my name is Vaporwave, this is a text bot who can helps you!"
                });
            break;
            //!youtube
            case 'youtube':
                bot.sendMessage({
                    to: channelID
                    message: "I reccomend you subscribe to the Mattedits, Riot and Davudsan channels!"
                });
            break;
            //!squalidjoke1
            case 'squalidjoke1':
                bot.sendMessage({
                    to: channelID
                    message: "Why did the boy drop his ice cream? Because he was hit by a bus"
                });
            break:
            //!squalidjoke2
            case 'squalidjoke2':
                bot.sendMessage({
                    to: channelID
                    message: "Roses are red, Violets are blue. I have a gun. Get in the van"
                });
            break:
            //!squalidjoke3
            case 'squalidjoke3':
                bot.sendMessage({
                    to: channelID
                    message: "What is red and smells like blue paint? Red paint"
                });
            break:
            //!mattedits
            case 'mattedits':
                bot.sendMessage({
                    to: channelID
                    message: "Subscribe here: https://www.youtube.com/channel/UCaYIVltgX_wsD1Hwz7oClOA"
                });
            break:
            //!riot
            case 'riot':
                bot.sendMessage({
                    to: channelID
                    message: "Subscribe here: https://www.youtube.com/channel/UC910PMKNqqmTMlSLlXN6w_A"
                });
            break:
            //!davudsan
            case 'davudsan':
                bot.sendMessage({
                    to: channelID
                    message: "Subscribe here: https://www.youtube.com/channel/UCtdaEJDL7X2SU7lq8px_jTg"
                });
        }
    }
});


