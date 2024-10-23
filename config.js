//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "2349112171078";
global.owner = process.env.OWNER_NUMBER || "2349112171078";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEhWTTJCUFNwTWprb01HR2cwcDZlMFdvR3JhZGU3bitjaGtpK2JoekxIVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2h3MGdUM2tnOG1pdnA5NW1nbXJacXR6MFUza2R0RTNmWW5RbzliaHNEQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnTm9CTGhKUStKN25kYXlvVzU3NE03azdUUHB2eGhxeEZISlBKRngzbDI0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJdG96M0NCRENkSmFPdjg1cG9Za3FEVFloU3VuTSsvMGUzaUlQaE1uSW5BPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNETG9ONkhaNzA0Q3BzVU9mcXRtTVEvRVNqWUxxYTBDU1BPM2dreU5LV2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhEYjVBZkdnaEpuMENqZU5XUlUyaDBiR1dMMERkQmVVMzhOQmQrdkxEMTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkt3Zzl3eklIKzVHdGxEMTdwQnNoWU8wR0loK01SbE0rNFRpNEQ5OEkzUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTVzalpocHpqa3lrNFBDanJYc2lYQ0lkL0NNdkRDVU1tL213VzZMNjBtbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRQbzhHMDN3b20vZUdLRXFXVllDcUxjM1N0a2ZjMG5RWEU1NGVMMURWdjRyWGxnVGhRdnU4RnVXMGVxT0FJdzgvanJ3eUxoNGRmYTVULzJzbE9Ya0N3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk4LCJhZHZTZWNyZXRLZXkiOiJJc2lpWFplUS83WmNCV3FmL2lKdSsydHZQa203Rml4ZVdmUjRFdkY4TVhjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJIbWdsVWtoM1RINlkxd3Vlc1Y1NDNRIiwicGhvbmVJZCI6IjU5ODlkYWJjLTAyNWUtNGViOS04MWQ3LTFhODRhYzU1ZjhiNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxb3gzUmRLM1pSakhiMXdkQ1B5YkpKQk51azQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmhOT1lpR0txQ1lleFhrdkFoVDFzb2NFS1IwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlY2QkNEUFhaIiwibWUiOnsiaWQiOiIyNjM3NzY4MjE3NjY6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSaWRkbGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQSEZxcU1DRVBLbTRMZ0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJOY09XV1FpbktFK1F2YUxBRzVNTG1PS3czMnMvTVF3a29qcU1pYkRYSmxFPSIsImFjY291bnRTaWduYXR1cmUiOiI2bVJ2RWRSdUVPTTZlVlY0cXVyV1RDRmVmbjkrRkMvSmloOWVvdkxkMFVweUF0UXJRKzBHK0J2WFl4ZkN0eDhnWEkrVVNQMklXYWpvanEzOXB1YUhDdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiNllJZmVjUmxGL0hDTjU4Y2RBYmZjblhQUFArblp6Q2kxcGxVb25rUC9ka0FSemgwM2tGcU5lVTJCVm05bVkwbGtYcytOaEtJMmxmMFpNQmUvTXJiQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzY4MjE3NjY6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUWERsbGtJcHloUGtMMml3QnVUQzVqaXNOOXJQekVNSktJNmpJbXcxeVpSIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5NjMxMTA0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUM4eCJ9==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "HAKI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
