const venom = require('venom-bot');
const keywords = require('./keywords');

venom
	.create()
	.then((client) => start(client))
	.catch((erro) => {
		console.log(erro);
	});

async function start(client) {
	await client
	//Notify Admin About Start System
		.sendText('0000000000000@c.us', `👋 The Support System it's online now`)

	client.onMessage((message) => {
		keywords.welcome.forEach(
			function (words) {
				if (message.body === words && message.isGroupMsg === false) {
					client
						.sendText(message.from, `Select The Best Option for Your Support:
1: Receiver a Link Support
2: Receiver a Video Support
`)
				}
			})
	});
	client.onMessage((message) => {
		if (message.body === '1' && message.isGroupMsg === false) {
			client
				.sendText(message.from, `Your Suporte Link Is: https://google.com`)
		}
	});
	client.onMessage((message) => {
		if (message.body === '2' && message.isGroupMsg === false) {
			client
				.sendLinkPreview(
					message.from,
					'https://www.youtube.com/watch?v=V1bFr2SWP1I',
					'Kamakawiwo ole'
				)
		}
	});
}