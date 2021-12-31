module.exports.config = {
	version: "1.0.2",
	name: "menu",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Hướng dẫn cho người mới",
	commandCategory: "system",
	usages: "[Tên module]",
	cooldowns: 5,
	envConfig: {
		autoUnsend: true,
		delayUnsend: 10
	}
};

module.exports.languages = {
	"vi": {
		"moduleInfo": "╭───╮\n    %1\n╰───╯ \n📜Mô tả: %2\n\n» 🧞Credit: %7\n» 📄Hướng dẫn cách dùng: %3\n» 🌟Thuộc nhóm: %4\n» ⏱Thời gian chờ: %5 giây(s)\n» 👥Quyền hạn: %6\n✎﹏﹏﹏﹏﹏﹏﹏﹏﹏﹏\n❤Điều Hành Bởi ♥Binee❤❤",
		"helpList": '≻─────── •👇🏻• ───────≺\n🏰🏰🏰 𝐻𝑖𝑒̣̂𝑛 𝑡𝑎̣𝑖 đ𝑎𝑛𝑔 𝑐𝑜́ %1 𝑙𝑒̣̂𝑛ℎ 𝑐𝑜́ 𝑡ℎ𝑒̂̉ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑡𝑟𝑒̂𝑛 𝑏𝑜𝑡 \n🌟𝑆𝑢̛̉ 𝑑𝑢̣𝑛𝑔: "%help + tên lệnh" đ𝑒̂̉ 𝑏𝑖𝑒̂́𝑡 𝑐𝑎́𝑐ℎ 𝑠𝑢̛̉ 𝑑𝑢̣𝑛𝑔 𝑙𝑒̣̂𝑛ℎ\n🤖𝐵𝑜𝑡 đ𝑢̛𝑜̛̣𝑐 đ𝑖𝑒̂̀𝑢 ℎ𝑎̀𝑛ℎ 𝑏𝑜̛̉𝑖♥Binee❤.\n[💟] Đ𝑎̂𝑦 𝐿𝑎̀ 𝑇𝑜𝑎̀𝑛 𝐵𝑜̣̂ 𝐿𝑒̣̂𝑛ℎ 𝐶𝑜́ 𝑇𝑟𝑜𝑛𝑔 𝐹𝑖𝑙𝑒 𝐵𝑜𝑡 UwU. [❗]\n🔰𝑉𝑢𝑖 𝐿𝑜̀𝑛𝑔 𝐾ℎ𝑜̂𝑛𝑔 𝑆𝑝𝑎𝑚  [❗]',
		"user": "Người dùng",
        "adminGroup": "Quản trị viên nhóm",
        "adminBot": "Quản trị viên bot"
	},
	"en": {
		"moduleInfo": "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 «",
		"helpList": '[ There are %1 commands on this bot, Use: "%2help nameCommand" to know how to use! ]',
		"user": "User",
        "adminGroup": "Admin group",
        "adminBot": "Admin bot"
	}
};

module.exports.handleEvent = function ({ api, event, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID, body } = event;
	
	if (!body || typeof body == "undefined" || body.indexOf("menu") != 0) return;
	const splitBody = body.slice(body.indexOf("menu")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage({ body: getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), attachment: fs.createReadStream(folderimg+"/"+listImg[Math.floor(Math.random() * listImg.length)])}, threadID, messageID);
}

module.exports.run = function({ api, event, args, getText }) {
  const fs = require("fs-extra");
	const { commands } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	
  if (!command) {
		const arrayInfo = [];
		const page = parseInt(args[0]) || 1;
    const numberOfOnePage = 20;
    let i = 0;
    let msg = "";
    
    for (var [name, value] of (commands)) {
      name += `: ${value.config.description}`;
      arrayInfo.push(name);
    }

    arrayInfo.sort((a, b) => a.data - b.data);
    
    const startSlice = numberOfOnePage*page - numberOfOnePage;
    i = startSlice;
    const returnArray = arrayInfo.slice(startSlice, startSlice + numberOfOnePage);
    
    for (let item of returnArray) msg += `≻─────── ${++i}───────≺ \n❤${item}\n\n`;
    
    const randomText = ["owwo", "bạn rất ngu"];
    const text = `Trang (${page}/${Math.ceil(arrayInfo.length/numberOfOnePage)})\nGõ: "${prefix}help <tên lệnh>" để biết thêm chi tiết về lệnh \nHiện tại có ${arrayInfo.length} lệnh trên bot của ♥ Binee\nDùng ${prefix}menu <Số trang>\n_________________________________\n[Bạn có biết] : ${randomText[Math.floor(Math.random()*randomText.length)]}`;
    return api.sendMessage(msg + "\n\n" + text, threadID, async (error, info) => {
			if (autoUnsend) {
				await new Promise(resolve => setTimeout(resolve, delayUnsend * 99000));
				return api.unsendMessage(info.messageID);
			} else return;
		});
	}

	return api.sendMessage(getText("moduleInfo", command.config.name, command.config.description, `${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}`, command.config.commandCategory, command.config.cooldowns, ((command.config.hasPermssion == 0) ? getText("user") : (command.config.hasPermssion == 1) ? getText("adminGroup") : getText("adminBot")), command.config.credits), threadID, messageID);
};