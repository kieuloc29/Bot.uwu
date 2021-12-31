const fs = require("fs");
module.exports.config = {
	name: "hù",
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
	if (event.body.indexOf("hù")==0 || (event.body.indexOf("Hù")==0)) {
		var msg = {
				body: "Chết Mẹ Mày Chưa",
				attachment: fs.createReadStream(__dirname + `/noprefix/he.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}