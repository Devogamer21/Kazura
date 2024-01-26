module.exports = {
	type: "trackPause",
	channel: "$channelID",
	code: `
	$title[Track Paused]
	$description[Track Paused for <#$voiceID[$clientID]> 
	in Duration $songInfo[duration] ]]
	$color[Red]`
}