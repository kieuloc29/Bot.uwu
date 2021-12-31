module.exports.config = {
    name: "noprefix",
    version: "1.0.1",
    hasPermssion: 2,
    credits: "Toàn",
    description: "",
    commandCategory: "noprefix",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs-extra": "",
        "request": ""
    }
};

module.exports.handleEvent = async ({ event, api, Users }) => {

    const fs = global.nodemodule["fs-extra"];
    var { threadID, messageID, body, senderID } = event;
    const thread = global.data.threadData.get(threadID) || {};
    var user = global.data.allUserID || {};
     if (typeof user["noprefix"] !== "undefined" && user["noprefix"] == false) return; 
    if (typeof thread["noprefix"] !== "undefined" && thread["noprefix"] == false) return;
    function out(data) {
        api.sendMessage(data, threadID, messageID)
    }
   if (event.body.indexOf("Bot")==0 || (event.body.indexOf("bot")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`em nè ${name} gọi em có j ko :33`,threadID, messageID);
 }
  if (event.body.indexOf("Đi ngủ")==0 || (event.body.indexOf("Ngủ")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`chúc bae ${name} ngủ ngon nhé :33`,threadID, messageID);
 }
 if (event.body.indexOf(":))")==0 || (event.body.indexOf(":))))")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng cười nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf("=))")==0 || (event.body.indexOf("=))))")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng cười nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf(":v")==0 || (event.body.indexOf(":V")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Bẻ mỏ đó ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf("=-=")==0 || (event.body.indexOf("=.=")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`icon ít thôi ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf(":>")==0 || (event.body.indexOf("=>")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng cười nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf(";-;")==0 || (event.body.indexOf(";+;")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng icon nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf("-.-")==0 || (event.body.indexOf("-,-")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng icon nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf("==")==0 || (event.body.indexOf("--")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng icon nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf("=3")==0 || (event.body.indexOf(":3")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Đừng icon nữa ${name} tt đi :33`,threadID, messageID);
  }
  if (event.body.indexOf("=((")==0 || (event.body.indexOf(":((")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Sao buồn zị ${name} bot thương :33`,threadID, messageID);
  }
   if (event.body.indexOf("=<")==0 || (event.body.indexOf(":<")==0)) {
     let name = await Users.getNameUser(event.senderID);
     return api.sendMessage(`Sao buồn zị ${name} bot thương :33`,threadID, messageID);
  }
  if (event.body.indexOf("Haha")==0 || (event.body.indexOf("Kk")==0)) {
 var msg = {
    attachment: fs.createReadStream(__dirname + `/noprefix/haha.mp4`)
      }
       api.sendMessage(msg, threadID, messageID);
     }
  };
module.exports.languages = {
    "vi": {
        "on": "Bật",
        "off": "Tắt",
        "successText": "noprefix thành công",
    },
    "en": {
        "on": "on",
        "off": "off",
        "successText": "noprefix success!",
    }
}

module.exports.run = async function({ api, event, Threads, getText }) {
    const { threadID, messageID } = event;
    let data = (await Threads.getData(threadID)).data;
     var user = global.data.allUserID || {};
     const u = data || user
    if (typeof u["noprefix"] == "undefined" || u["noprefix"] == true) u["noprefix"] = false;
    else u["noprefix"] = true;
    await Threads.setData(threadID, { data });
    global.data.threadData.set(threadID, data);
    return api.sendMessage(`${(u["noprefix"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}       
