module.exports.config = {
	name: "masoi",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Game ma sói phiên bản vip pro Cho bot làm quản trị viên để bot làm quản trò ! Ít nhất 5 người",
	commandCategory: "Game",
	usages: "[create]/[join]/[start]/[info]/[leave]/[help]",
	cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
	var info = await api.getThreadInfo(event.threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Bot Cần Quản Trị Viên để làm quản trò :( ', event.threadID, event.messageID);
	var threadInfo = await api.getThreadInfo(event.threadID)
    {
    
	   api.removeUserFromGroup(event.senderID, event.threadID)
    }
 api.sendMessage(`cho chừa cái tội lanh chanh này=)) lần sau bớt lanh chanh lại nhá, phải hỏi admin trước khi dùng lệnh đi=)))\nDùng !help để xem toàn bộ lệnh của bot. Lần này k lừa nữa đâu =))`, event.threadID);
 }

