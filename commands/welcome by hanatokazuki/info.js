module.exports = [{
	name: "wsetup",
	code: ` $awaitMessages[$channelID;$authorID;10s;everything;welcomenext;Command timeout...]
$title[1;Embeds or Text]
	$description[1;How do you want the bot send message as?]
	$footer[1;Type "embeds" or "text" to choose]
	$color[1;Orange]
	$onlyPerms[manageguild;You need \`\`Manage Guild\`\` permission to use this command!]
`    
},{
	name: "welcomenext",
	type: "awaited",
	code: `$ifAwaited[$toLowerCase[$message[1]]==embeds;{execute:welcomeembeds};{execute:welcomenonembeds}]
	$setGuildVar[welcometype;$toLowerCase[$message[1]]]`
},{
	name: "welcomenonembeds",
	type: "awaited",
	code: `$ifAwaited[$toLowerCase[$message[1]]==text;{execute:welcomenonembedsnext};Failed...]`
},{
	name: "welcomenonembedsnext",
	type: "awaited",
	code: `$awaitMessages[$channelID;$authorID;2m;everything;welcomemsgnext;Command timeout...]
	$title[1;Welcomer Channel Setup Completed]
	$description[1;Channel setup complete, next what message do you want the bot set when a new user join? Type "default" to set default welcomer message.
	Welcomer Syntax:
	\`\`{user.name} - Return the new member's display name.\n{user.mention} - Mention the new member.\n{user.id} - Return the new member id.\n{guild.name} - Return Server Name.\n{account.created.date} - Return new member account creations date.\`\`
Example: \n\`\`\`**{guild.name}**\nUser: **{user.name}**\nAccount Creation Date: {account.created.date}\`\`\`]
	$color[1;Blue]`
},{
	name: "welcomemsgnext",
	type: "awaited",
	code: `$ifAwaited[$toLowerCase[$message]==default;{execute:welcomemsgdefault};{execute:welcomemsgcustom}]`
},{
	name: "welcomemsgdefault",
	type: "awaited",
	code: `$title[1;Welcomer Setup Complete!]
	$description[1;Welcome message have been set as:
	\`\`\`$getVar[welcomemsg]\`\`\`]
	$color[1;Green]
	$setGuildVar[welcomemsg;$getVar[welcomemsg]]`
},{
	name: "welcomemsgcustom",
	type: "awaited",
	code: `$title[1;Welcomer Setup Compete!]
	$description[1;Welcome message have been set as:
	\`\`\`$message\`\`\`]
	$color[1;Green]
	$setGuildVar[welcomemsg;$message]`
},{
	name: "welcomeembeds",
	type: "awaited",
	code: `$awaitMessages[$channelID;$authorID;2m;everything;welcomeembedsnext0;Command timeout...]
	$title[1;Welcomer Channel Setup Completed]
	$description[1;Channel setup complete, next what message do you want the bot set when a new user join? Type "default" to set default welcomer message.
	Arguments:
	__**Title|Description**__
	Welcomer Syntax:
	\`\`{user.name} - Return the new member's display name.\n{user.mention} - Mention the new member.\n{user.id} - Return the new member id.\n{guild.name} - Return Server Name.\n{account.created.date} - Return new member account creations date.\`\`
Example: \n\`\`\`Welcome To {guild.name}|Hello {user.mention}, welcome to the server!\`\`\`]
	$color[1;Blue]`
},{
	name: "welcomeembedsnext0",
	type: "awaited",
	code: `$ifAwaited[$message[1]==default;{execute:welcomeembedsdefault};{execute:welcomeembedsnext}]`
},{
	name: "welcomeembedsdefault",
	type: "awaited",
	code: `$title[1;Welcomer Setup Complete!]
	$description[1;Your welcomer embeds message have been set as:
	\`\`\`$getObjectProperty[welcome;title]|$getObjectProperty[welcome;description]\`\`\`]
	$color[1;Green]
	$createObject[welcome;$getVar[welcomemsgembeds]]
	$setGuildVar[welcomemsgembeds;$getVar[welcomemsgembeds]]`
},{
	name: "welcomeembedsnext",
	type: "awaited",
	code: `
	$author[2;Quick Preview;$authorAvatar]
	$title[2;$splitText[1]]
	$description[2;$splitText[2]]
	$color[2;White]
	$title[1;Welcomer Setup Completed!]
	$description[1;You've Successfully setup the welcome feature!]
	$color[1;Green]
	$setGuildVar[welcomemsgembeds;$getObject[welcomeembeds]]
	$setObjectProperty[welcomeembeds;description;$splitText[2]]
	$setObjectProperty[welcomeembeds;title;$splitText[1]]
	$textSplit[$message;|]
	$createObject[welcomeembeds;$getGuildVar[welcomemsgembeds]]
	 $onlyIf[$splitText[2]!=&&$splitText[1]!=;You can't leave the arguments blank! Title|Description]
	$textSplit[$message;|]`
}]
