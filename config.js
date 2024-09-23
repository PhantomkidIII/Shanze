//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2347014544425";
global.owner = process.env.OWNER_NUMBER || "2347014544425";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZeyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK083c1BhQ1ZqNElhREdKNmVsamhxU2pDcnBYbVZUZG12UlVqSjVmczVYUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVdUQlphb0pxdFNuWlp5T0NkeWRTclVCNXROVVNUQ01qdm55SGt4ZCtXRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSm40R0Jkb1g3Wi9VUUMzLzd3NmVYSUQyZDd6bkh6L04zOVpRd2NDR0dJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWZDM0SjQ1SkxleWFlZ0tZU2t5elZXZERlNWFhNkVieTJTTFpxR3JodFVzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVIREpld21yVW9tZnY0ZUlvM283V2U3bzUyQnFOak1KTWd0ZkY3b1ErMWs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkM1YkRaZzJNdmM4enA4TElMRGxqK2dFSXNnTzlGcWhjT201SllBdTkyaTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUEyTGgzU3kwOW9NVFVSS0dKOG1LK0ppdFhYV0JQNWJla1BON2hBZnprND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmhOa1RHZktEVWp3dUc3YSsrYjZBTGEzZytHNUtYdDRyYWpkajA2RmZoWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJmYThEWWhiV0s4VWcrYVQ5NEJ1M0xNWkhpTHFFQWZOeEZZRm9SQWxiaVl3UmxEaU05QnRtWnFTZzh5ZFhpUnRiS2wvRmlTekJvMXFJK3QzQmtXVGp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjksImFkdlNlY3JldEtleSI6IjBuS2xXMmRNT1Fna1kvS00vZDRGNzRnZXZRQytndzRVYXl0b3ZXbndCRlU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0NzAxNDU0NDQyNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJDQTRBOTZFNzMyM0RBNzIzQjA3RDg2QTVBMDE4MjQ2RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI3MDU0ODQ4fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJlOEdDSWRfeVM2dUtDN05Ed2ZzazZnIiwicGhvbmVJZCI6IjEwMDYwNjJmLWRlZTctNDkzYy04MDA0LTk2YTc5OGFlZjE1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnblNmRW1WUmhSZmRHbHZCNnN2Mmp0S0gzbkk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNlpFSkcxbVBRaVlIbVhPUFArTE8zb3ZmTE00PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxROU1IRkFDIiwibWUiOnsiaWQiOiIyMzQ3MDE0NTQ0NDI1OjExQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IlNIQU5aWSBfIFNIT1AifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lmNnRPa0VFTzZIdzdjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImtSMVBwR29MSGJyanBLL1BER3VoZUZsVDRWNTFRVDQwUmFZS0FKU0xYRkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkJGajk5R0F2ZzFSSHUwRE1ya2V5OTFjRDVibmpycEY0MEQ2aXlXZ3I5dmFNNlRHOUQzS3drbURjYkczZ2IxVHhoZ01aMndkUGpaVUhzT0hkVExBOUJ3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJGRXkwVlBsa3IxaGFibzJPczQyNExMcFlVcjcxTTMzdTBjU0xERlpyTFJRRFd5OHZibGhrdVRNdzFET1hrMlpZcURqSng5OG82K2tyc3NXNmQ3Nk9qdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTQ1NDQ0MjU6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkVkVDZScUN4MjY0NlN2end4cm9YaFpVK0ZlZFVFK05FV21DZ0NVaTF4UyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzA1NDg0MywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFBL1kifQ=="
  module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
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
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
