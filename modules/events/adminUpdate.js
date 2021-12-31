module.exports.config = {
	name: "adminUpdate",
	eventType: ["log:thread-admins","log:thread-name", "log:user-nickname"],
	version: "1.0.1",
	credits: "Mirai Team",
	description: "Cập nhật thông tin nhóm một cách nhanh chóng",
    envConfig: {
        autoUnsend: true,
        sendNoti: true,
        timeToUnsend: 10
    }
};

module.exports.run = async function ({ event, api, Threads }) { 
    const { threadID, logMessageType, logMessageData } = event;
    const { setData, getData } = Threads;

    try {
        let dataThread = (await getData(threadID)).threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({ id: logMessageData.TARGET_ID })
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`🐳 𝙏𝙃𝙊̂𝙉𝙂 𝘽𝘼́𝙊 💗 | Đ𝙖̃ 𝙘𝙖̣̂𝙥 𝙣𝙝𝙖̣̂𝙩 𝙣𝙜𝙪̛𝙤̛̀𝙞 𝙙𝙪̀𝙣𝙜 ${logMessageData.TARGET_ID} 𝙩𝙧𝙤̛̉ 𝙩𝙝𝙖̀𝙣𝙝 𝙦𝙪𝙖̉𝙣 𝙩𝙧𝙞̣ 𝙫𝙞𝙚̂𝙣 𝙣𝙝𝙤́𝙢`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    if (global.configModule[this.config.name].sendNoti) api.sendMessage(`🐳 𝙏𝙃𝙊̂𝙉𝙂 𝘽𝘼́𝙊 💗 | Đ𝙖̃ 𝙘𝙖̣̂𝙥 𝙣𝙝𝙖̣̂𝙩 𝙣𝙜𝙪̛𝙤̛̀𝙞 𝙙𝙪̀𝙣𝙜 ${logMessageData.TARGET_ID} 𝙩𝙧𝙤̛̉ 𝙩𝙝𝙖̀𝙣𝙝 𝙩𝙝𝙖̀𝙣𝙝 𝙫𝙞𝙚̂𝙣`, threadID, async (error, info) => {
                        if (global.configModule[this.config.name].autoUnsend) {
                            await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                            return api.unsendMessage(info.messageID);
                        } else return;
                    });
                }
                break;
            }

            case "log:user-nickname": {
                dataThread.nicknames[logMessageData.participant_id] = logMessageData.nickname;
                if (typeof global.configModule["nickname"] != "undefined" && !global.configModule["nickname"].allowChange.includes(threadID) && !dataThread.adminIDs.some(item => item.id == event.author) || event.author == api.getCurrentUserID()) return;
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`🐳 𝙏𝙃𝙊̂𝙉𝙂 𝘽𝘼́𝙊 💗 | Đ𝙖̃ 𝙘𝙖̣̂𝙥 𝙣𝙝𝙖̣̂𝙩 𝙗𝙞𝙚̣̂𝙩 𝙙𝙖𝙣𝙝 𝙘𝙪̉𝙖 𝙣𝙜𝙪̛𝙤̛̀𝙞 𝙙𝙪̀𝙣𝙜 ${logMessageData.participant_id} 𝙩𝙝𝙖̀𝙣𝙝: ${(logMessageData.nickname.length == 0) ? "𝙩𝙚̂𝙣 𝙜𝙤̂́𝙘": logMessageData.nickname}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }

            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || "Không tên";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`🐳 𝙏𝙃𝙊̂𝙉𝙂 𝘽𝘼́𝙊 💗 | Đ𝙖̃ 𝙘𝙖̣̂𝙥 𝙣𝙝𝙖̣̂𝙩 𝙩𝙚̂𝙣 𝙣𝙝𝙤́𝙢 𝙩𝙝𝙖̀𝙣𝙝 ${dataThread.threadName}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await setData(threadID, { threadInfo: dataThread });
    } catch (e) { console.log(e) };
}