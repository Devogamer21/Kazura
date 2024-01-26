module.exports = [{
	name: "onJoin",
	type: "join",
	channel: "$getGuildVar[welcomechannel]",
	$if: "old",
	code: `$if[$getGuildVar[welcometype]==embeds]
   $title[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[1];{user.name};$userDisplayName[$authorID]];{user.mention};<@$authorID>];{user.id};$authorID];{guild.name};$guildName];{account.created.date};$creationDate[$authorID;date]]]
   $description[1;$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$splitText[2];{user.name};$userDisplayName[$authorID]];{user.mention};<@$authorID>];{user.id};$authorID];{guild.name};$guildName];{account.created.date};$creationDate[$authorID;date]]]
   $color[1;Blue]
	$textSplit[$get[welcome];|]
	$let[welcome;$getObjectProperty[welcome;title]|$getObjectProperty[welcome;description]]
	$createObject[welcome;$getGuildVar[welcomemsgembeds]]
	$else
	$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getGuildVar[welcomemsg];{user.name};$userDisplayName[$authorID]];{user.mention};<@$authorID>];{user.id};$authorID];{guild.name};$guildName];{account.created.date};$creationDate[$authorID;date]]
	$endif
	$onlyIf[$getGuildVar[welcome]!=false;]`
}]