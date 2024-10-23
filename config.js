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
global.owner = process.env.OWNER_NUMBER || "263714254115";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlXc0pMRnFpKzFQbERnTnZ6MGRSUGxHeHBWQnQwcVpZZVJoTU10TkVtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2EyTE51VlduUnBOWmtaWDY4eTNaSDdUVjZiOStSdXp0UFlWVE1sbjdUcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSFVLZ1djRU5XRjBLRWRLL0lkd0NVWXk1WVE4NWg4cFk1dHh3MVFLbFYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUlBqQ2wxemMxMzk2L24vL1Y5MGZ4WVR6UlJROGkwYUFXVjJVdjFwdnlrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdNeEJaa2hLU1BUUFBpT3FuWjhPaU1meFk4cTVLMUVUNUoyYUQ0dlR3Mkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhwU2hrZmVjbUg1ZUFOQUYzZi9oTXV0RWNoVHdmTzUvSlIzbWV1N3pkU2s9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkdPYmhKS2FHWk1FT3kwZnJDd21Cb0JNVklQdExvWlNYVTQ4K0VrVlgxcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNi9IbW5qY2lMRGJlQWlvejZhOGVCQjRMU3V3clFzK0Y5Tm9DdTJ5UFNXOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVVYnRyTDM3NFZ5L2tGNGlEcVZyWDNtREFuSVNad0FTSHJHWXpPQk5SeHpSTFBsSm5jNFVUL3o5MFNQNjJoaFN0TllaZ1NPLzNMUWNGNjZrVXZ0V2pnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6Imx5VFBBWVJkQ3lvb05sQmpVWkg5YmEreGJGck00NHpvaUZuN2ZIY2FleDg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjYzNzE0MjU0MTE1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkFCOEVFRUUxOTY0RkNFMENEOUQ3M0M0NjQ3MTQxRjNCIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3Mjk3MTI0MjR9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI2MzcxNDI1NDExNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4MjRCMzk4M0MyODI3MTlGRjU3MjdGMkU3RkZDQjU2QiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI5NzEyNDI0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5QkNoTnBrblRqV2lEZ19nZkstOW9nIiwicGhvbmVJZCI6ImU0ZjJlODczLTMxM2UtNDY0ZS1hOGJlLTViZTUyNzkxN2UxYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJva1VqeEhOZ3lYbDlmYVdxbjN3SzlWeFppZEE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidnZzZm9LeVdZOUJueDJaeGdCQ0U0Yy8rdmV3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjlaSzVMQThSIiwibWUiOnsiaWQiOiIyNjM3MTQyNTQxMTU6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSaXp6xYHDuHLhuI0ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lTeHpyTUhFSmVpNWJnR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImVyVHJhSWZZY0ZYZ3V1czB1Y0dHeXBlODRZcFF1M0lTQVNTREk1NGNmbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Im80R1l5a0dWRDRqY041c0tFZjJkS1VIMlBwc2ZtVHJGVjV1cjFpdG54cmhDYUYxS0M1ZTZFVDlTL1lZQUhzME04S3FKTjVKbkRjdlNuQWJsS1ZqeUJnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJyM1UyZHNOQ2RDQWptQVFEVXBZdTk1cktST2pJVCtiOEp1c1haZ0VFbE53SVI2RGM4L284RVdaMUZNQUVSdVJZcHlwRHdmOC83UEZFWitFSXV2Ymdndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2MzcxNDI1NDExNToyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhxMDYyaUgySEJWNExyck5MbkJoc3FYdk9HS1VMdHlFZ0VrZ3lPZUhINXkifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Mjk3MTI0MjEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRjZqIn0=" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "Rizzlord",
  botname: process.env.BOT_NAME || "QUEEN_NIKKA",
  ownername: process.env.OWNER_NAME || "Rizzlord",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
