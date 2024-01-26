module.exports = {
	name:"$alwaysExecute",
	$if:"old",
	code:`
	$if[$getGlobalUserVar[xp;$authorID;main]>=450]
	$setGlobalUserVar[level;$sum[$getGlobalUserVar[level;$authorID;main];1];$authorID;main]
	$setGlobalUserVar[xp;0;$authorID;main]
	$setGlobalUserVar[$get[randomitem];$sum[$getGlobalUserVar[$get[randomitem];$authorID;main];1];$authorID;main]
	$title[1;Level Up!]
	$description[1;Congratulations <@$authorID>, you have leveled up to level $getGlobalUserVar[level;$authorID;main]!
	An you got $get[randomitem]]
	$thumbnail[1;$userAvatar[$authorID]]
	$let[randomitem;$randomText[fishing_rod;pizza;burger;normal_box]]
	$color[Random]
	$endif
	`
}