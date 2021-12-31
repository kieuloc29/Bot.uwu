const fs = require("fs");
module.exports.config = {
	name: "Huấn",
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
	if (event.body.indexOf("thầy huấn")==0 || (event.body.indexOf("Thầy huán")==0)) {
		var msg = {
				body: "Xã Hội Này",
				attachment: fs.createReadStream(__dirname + `/noprefix/rose.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}