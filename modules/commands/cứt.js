const fs = require("fs");
module.exports.config = {
	name: "cứt",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "no prefix",
	commandCategory: "Không cần dấu lệnh",
	usages: " ",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("cc")==0 || (event.body.indexOf("Cc")==0)) {
		var msg = {
				body: "Nè thơm không :)",
				attachment: fs.createReadStream(__dirname + `/noprefix/cứt.jpeg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}