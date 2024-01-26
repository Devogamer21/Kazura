module.exports = [{
	type: "trackEnd",
	channel: "$channelID",
	code: `
	$color[Red]
	$description[Queue Ended for $voiceID[$clientID]]
`
	}]