theconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Nigeria,Osun,Oshogbo."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria/Osun,Oshogbo";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Vah3XPC6rsQtIcfTX342" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Empire_Md" 


global.devs = "2348078582627" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348144638700";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/75fab4da4ca60e4a651d0.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_27_09_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTE4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NyxcbiAgICAgICAgMTU2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDgzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjA2LFxuICAgICAgICA0LFxuICAgICAgICA2NixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA1LFxuICAgICAgICAyMjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEsXG4gICAgICAgIDExNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5NixcbiAgICAgICAgMTE3LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMCxcbiAgICAgICAgMTY1LFxuICAgICAgICA1OSxcbiAgICAgICAgOTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICA4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAzLFxuICAgICAgICA4NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMjFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxODksXG4gICAgICAgIDEzLFxuICAgICAgICAxMyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNixcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgODksXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiaEpMRWlqcDZMS1k0SFllajcyNmJicGcvTmlTMkl4cmtnNy9oUVdzQ1FhMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ4MTQ0NjM4NzAwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3MTQwNEIxOEQ5QTQ3QzM0RDZDRDM3RjE1MTQ3REJDNlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjYxMjYwMjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiV1duSmNyc2xUdzJDMHMyUFUtUHpJQVwiLFxuICBcInBob25lSWRcIjogXCI4MTVhZmIwNy03YWIxLTRlYjItYTk2NC1hNTNhMjUyZDczNThcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTEsXG4gICAgICAxMCxcbiAgICAgIDIzMixcbiAgICAgIDEzNyxcbiAgICAgIDE3OSxcbiAgICAgIDE3OCxcbiAgICAgIDkxLFxuICAgICAgMjEyLFxuICAgICAgNjYsXG4gICAgICAxMjYsXG4gICAgICAyNixcbiAgICAgIDY3LFxuICAgICAgMTU3LFxuICAgICAgMTA4LFxuICAgICAgMjI3LFxuICAgICAgMTQxLFxuICAgICAgMTkzLFxuICAgICAgMTk5LFxuICAgICAgNTAsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTQ1LFxuICAgICAgMTIzLFxuICAgICAgNjIsXG4gICAgICAxNjAsXG4gICAgICAyNDUsXG4gICAgICAyOSxcbiAgICAgIDEyNyxcbiAgICAgIDE3MyxcbiAgICAgIDg4LFxuICAgICAgMTgwLFxuICAgICAgMTg0LFxuICAgICAgMzQsXG4gICAgICAxNixcbiAgICAgIDIzOSxcbiAgICAgIDEyMixcbiAgICAgIDEwMyxcbiAgICAgIDgxLFxuICAgICAgMjM3LFxuICAgICAgMTQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlJERTgxRlZLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTQ0NjM4NzAwOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJzdXBlcmdpZ1wiLFxuICAgIFwibGlkXCI6IFwiNTkxNDIwMDE2ODg3MTY6NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKK3IyLzRIRUw2dmlyY0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlROb1EyRzl6a2RBQXBycURhRVYvS1IyU29IM3k1MU44MDRIaURyS3l2bmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMG5pQ1JxTVNNYXRhc0JMV2V0bUVpaHIvR1ljeVp5b1hMM21uZUlFYW82bmRUU1ByZnJSVUxoYmRGOGU2ZHE0N0dOQVBjQWx6MTh2c0tiN1F6S2F0Q0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiY2Q3VS9xdVFjQ2VaWFUwSENJTm8zb0JzcVVLaTY1d1dJMU95Nnc1MmlYNFViQW1INkZReVJxSWVYOEJnS2pKM0FxVm5uYVBkdUdZd3N1L3J2czdyRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE0NDYzODcwMDo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI2MTI2MDE3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnZuXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdm4uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJCR2JhNWpOcmx6YlNVVUx5V2FLT2xqQzBydGt5d0UyOFdRNFcwN3dERFpVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIxNDQ3ODU4MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjEyNjAyMTc2M1wifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",
  packname: process.env.PACK_NAME || "Sticker by",
  botname : process.env.BOT_NAME  || "Empire_Md",
  ownername:process.env.OWNER_NAME|| "★彡[ᴏɴʟʏ_ᴏɴᴇ_🥇ᴇᴍᴘɪʀᴇ]彡★",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
