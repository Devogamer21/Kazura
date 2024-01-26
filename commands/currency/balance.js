module.exports = {
  name: "balance",
  aliases: ["bal"],
  code: `
	$title[$username[$mentioned[1]]'s Balance]
	$description[
Money:
- \`$getGlobalUserVar[money;$mentioned[1];main]$\`
Bank
- \`$getGlobalUserVar[bank;$mentioned[1];main]$\`
Shards
- \`$getGlobalUserVar[shards;$mentioned[1];main]\`
XP
- \`$getGlobalUserVar[xp;$mentioned[1];main]/450xp\`]
	$color[Yellow]`,
};