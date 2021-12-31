const fs = require("fs");
module.exports.config = {
	name: "qđ",
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
	if (event.body.indexOf("qđ")==0 || (event.body.indexOf("Qđ")==0)) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/quandoan.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}