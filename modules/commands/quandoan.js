module.exports.config = {
	name: "quandoan",
	version: "2.0.0",
	hasPermssion: 0,
	credits: "Created By Lộc",
	description: "Lấy thông tin một thứ gì đó của QĐ",
	commandCategory: "Về Quân Đoàn",
	usages: "Để trống",
	cooldowns: 5
};

module.exports.handleReply = async ({ event, api, handleReply }) => {
    const caseReply = (event.body);
    switch (caseReply) {
        case "1": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("Quân Đoàn Nameㅤ爱 được thành lập ngày 02/01/2019.\n" +
        "Người sáng lập:ㅤDavidㅤMann\n" +
        "ID người sáng lập: 1289743958\n" +
        "Tên Cũ: Kẻ Giết Thuê\n", event.threadID, event.messageID);
        }
        case "2": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("Tên Đầy Đủ Của Quân Đoàn : Nameㅤ爱\n\n" +
           "Chủ Quân Đoàn :\n" +
           "KiềuㅤLộcㅤ爱 (263422135)\n" +
           "Quyền Chủ Quân Đoàn :\n" +
           "TuấnㅤHùngㅤ爱 (1704133743)\n" + 
           "Kì Cựu :\n" +
           "XuânㅤAnhㅤ爱 (463811712)\n" +
           "PhùngㅤHiếuㅤ爱 (1021961921)\n" +
           "XuânㅤTùngㅤ爱 (344453541)\n", event.threadID, event.messageID);
        }
        case "3": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("Thành Viên Quân Đoàn :\n" +
            "HoàngㅤNgọcㅤ爱 (2988613011) bồ kao nha mài\n" +
            "ㅤDavidㅤMann (1289743958)\n" +
            "KiềuㅤNamㅤ爱 (59121624)\n" +
            "XuânㅤQuyếtㅤ爱 (358285433)\n" +
            "HồngㅤQuânㅤ爱 (251687960)\n" +
            "ThuㅤThuỷㅤ爱 (1595444493)\n" +
            "HoàngㅤTàuㅤ爱 (1868594029)\n" +
            "ZaaㅤHannㅤ爱 (2791622999)\n" +
            "AnhㅤQuốcㅤ爱 (1953456546)\n" +
            "NguyễnㅤNamㅤ爱 (2293579962)\n" +
            "NgọcㅤHảiㅤ爱 (2299743061)\n" +
            "PhươngㅤMaiㅤ爱 (2752965503)\n" +
            "ÁnhㅤDươngㅤ爱 (1833981423)\n" +
            "ebeㅤUriㅤ要 (2355916931)\n" +
            "VănㅤĐạt┊lmt (50944204)\n" +
            "TrisKiếmGhệ! (350078968)\n" +
            "#NgọcThơ.^^ (1865045184)\n" +
            "X.Ƭiên┊UwU (624751243)\n" +
            "LƴnhㅤPii',༊ (748844836)\n" +
            "ㅤ┊Aｌｏｎｅ┊ (873784590)\n" +
            "Mưa❦bae (899537170)\n" +
            "BillㅤSadboiz (971198650)\n" +
            "#hnhiㅤcute^^ (1196786884)\n" +
            "NgMinhĐức (1746024180)\n" +
            "#ChủㅤBánMilo (1753442797)\n", event.threadID, event.messageID);
        }
        case "4": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("Luật Quân Đoàn\n" +
        "Điều 1: Chủ Quân Đoàn Luôn Luôn Đúng\n" +
        "Điều 2: Nếu Sai Quay Lại Điều 1\n", event.threadID, event.messageID);
        }
        case "5": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("Đây Là ID Của Quân Đoàn Nameㅤ爱\n" +
        "ID : 62774364\n", event.threadID, event.messageID);
        }
        case "6": {
            api.unsendMessage(handleReply.messageID);
            const kitu = ("Nameㅤ爱")
            return api.sendMessage("Vui lòng copy kí tự bên dưới, xóa chữ (Name) và thay vào tên của bạn.", event.threadID, function () {
                return api.sendMessage(kitu, event.threadID, event.messageID);
            });
        }
        case "7": {
            api.unsendMessage(handleReply.messageID);
            return api.sendMessage("Hiện tại không có thông báo nào!", event.threadID, event.messageID);
        }
        default:
        return;
    }
}

module.exports.run = async function({ api, event }) {
    return api.sendMessage(`Bạn muốn lấy thông tin gì của QĐ?\n\n` +
    "1. Thông Tin Của Quân Đoàn\n" +
    "2. Cán Bộ Của Quân Đoàn\n" +
    "3. Thành Viên Quân Đoàn\n" +
    "4. Luật Quân Đoàn\n" +
    "5. ID Của Quân Đoàn\n" +
    "6. Kí Tự Của Quân Đoàn\n" +
    "7. Thông Báo\n\n" +
    "Hãy reply theo số thứ tự trùng với thông tin mà bạn muốn lấy", event.threadID, (error, info) => 
    global.client.handleReply.push({
        name: this.config.name,
        messageID: info.messageID,
        author: event.senderID}),event.messageID);
}