//═══════[© 2022 Turbo Bot Inc.]════════\\

//~you can re-upload but tag my channel
//or put my channel link in the description.
//~you can recode or copy the codes but give
//credit.
//~Thank you to Team Devil, Me And My Team.

//═══════[modules]════════\\

const fs = require('fs')
const chalk = require('chalk')

//═══════[api website]════════\\
global.APIs = {
	zenz: 'https://zenzapi.xyz', //credit zenz, thank you so much bro <3
}
//═══════[api key of the website]════════\\
global.APIKeys = {
	'https://zenzapi.xyz': 'turbo729', //thank you to zenz
}

//═══════[modification]════════\\
global.owner = ['94753240198'] //owner number, u can put multiple owner number, within quotations and seperated by comma.
global.pemilik = ['94701040812'] //another owner number
global.premium = ['94705661824'] //premium number
global.pengguna = 'Tharindu' //username
global.botnma = 'ꪶ𝗦𝗟𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩' //bot name
global.ownernma = 'Turbo Mods' //owner name
global.packname = 'ꪶ𝗦𝗟𝗬𝚵𝗥-𝗠𝗗ꫂ⁩⁩⁩' //sticker package name
global.author = 'Turbo Mods' //sticker author name
global.sessionName = 'session' //session name
global.prefa = ['#','!','/',''] //prefix
global.sp = '⭔' //design
global.mess = {
    success: 'Dᴏɴᴇ ✓',
    admin: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Aᴅᴍɪɴ!',
    botAdmin: 'Bᴏᴛ Mᴜsᴛ Bᴇ Aᴅᴍɪɴ Fɪʀsᴛ!',
    owner: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Is Oɴʟʏ Fᴏʀ Oᴡɴᴇʀ',
    group: 'Fᴇᴀᴛᴜʀᴇ Usᴇᴅ Oɴʟʏ Fᴏʀ Gʀᴏᴜᴘs!',
    private: 'Fᴇᴀᴛᴜʀᴇs Usᴇᴅ Oɴʟʏ Fᴏʀ Pʀɪᴠᴀᴛᴇ Cʜᴀᴛ!',
    bot: 'Tʜɪs Fᴇᴀᴛᴜʀᴇ Iɴ Oɴʟʏ Fᴏʀ Tʜᴇ Bᴏᴛ Nᴜᴍʙᴇʀ',
    wait: 'Pʟᴇᴀsᴇ Wᴀɪᴛ A Mɪɴᴜᴛᴇ ...',
    endLimit: 'Yᴏᴜʀ Dᴀɪʟʏ Lɪᴍɪᴛ Hᴀs Exᴘɪʀᴇᴅ, Tʜᴇ Lɪᴍɪᴛ Wɪʟʟ Bᴇ Rᴇsᴇᴛ Eᴠᴇʀʏ 12 Hᴏᴜʀs',
}
global.limitawal = {
    premium: "Infinity", //premium user limit
    free: 100 //free user limit
}
global.thumb = fs.readFileSync('./TurboMedia/slayer.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
