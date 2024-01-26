module.exports = {
	name:"$alwaysExecute",
	code:`$setGlobalUserVar[xp;$sum[$getGlobalUserVar[xp;$authorID;main];$random[5;10]];$authorID;main]`
}