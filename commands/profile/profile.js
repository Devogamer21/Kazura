module.exports = {
	name: "profile",
	code: `
	$title[Profile - $username[$findUser[$message[1]]]] 
	$thumbnail[$userAvatar[$mentioned[1]]]
	$description[
	Name : $username[$mentioned[1]]
	Level : $getGlobalUserVar[level;$mentioned[1]]
	XP : $getGlobalUserVar[xp;$mentioned[1]]/450
	]
	$addField[1;Balance;$getGlobalUserVar[money;$mentioned[1]]]
	$addField[1;Bank;$getGlobalUserVar[bank;$mentioned[1]]]
	$color[Random]

	$onlyIf[$mentioned[1]!=;Mention someone!]
	$onlyIf[$isBot[$mentioned[1]]!=true;Bots don't have profiles!]
	`
	
}