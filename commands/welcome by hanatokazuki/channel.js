module.exports = [{
	name: "wchannel",
	code: `$author[1;Welcomer Channel;$authorAvatar]
	$description[1;The welcome message will now send to <#$mentionedChannels[1;false]>]
	$color[1;Green]
	$setGuildVar[welcomechannel;$mentionedChannels[1;false]]
	$onlyIf[$hasPermsInChannel[$mentionedChannels[1;false];$clientID;sendmessages]!=false;I do not have permission to send message in that channel!]
	$onlyIf[$mentionedChannels[1;false]!=undefined;Please mention a channel to set for the welcomer message where to send!]
	$onlyPerms[manageguild;You need \`\`Manage Guild\`\` permission to use this command!]`
}]