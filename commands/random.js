const { SlashCommandBuilder } = require('discord.js');
const fetch = require('node-fetch-commonjs');
let constructURL = "https://sitetest83.online/";
var FormData = require('form-data');

async function GetImage() {
	let token = '0ecae348-7a91-11ed-834f-f02f74162ff6';

	let formData = new FormData();
formData.append('token', token);

	let play = fetch("https://sitetest83.online/motor.php?get&category=Background", {method: "POST", body:formData})
	.then(data =>{ return data.text()})
	.then(final => {return final})


	return play;

	
}

async function hui() {
	let myvalue = await GetImage();
	let image = new Image();
	img.src =myvalue;

	return image;

}

module.exports = {
	data: new SlashCommandBuilder()
		.setName('random-background')
		.setDescription('Vous envoie une image de fond/paysage aléatoire.'),
	async execute(interaction) {
		let file_d = await (GetImage());
		//console.log(await (file_d));
		 return interaction.reply({files : [constructURL + file_d]});
	},
};
