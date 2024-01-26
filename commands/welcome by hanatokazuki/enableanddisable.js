module.exports = [{
	name: "wenable",
	code: `$author[1;Welcomer Enabled;$authorAvatar]
	$description[1;Welcomer have been enabled, please set the channel where the message is going to send by typing \`\`$getGuildVar[prefix]wchannel #channel\`\`]
	$color[1;Green]
	$setGuildVar[welcome;true]
	$onlyIf[$getGuildVar[welcome]!=true;Welcomer feature are already enabled!]
	$onlyPerms[manageguild;You need \`\`Manage Guild\`\` permission to use this command!]`
},{
	name: "wdisable",
	code: `$author[1;Welcomer Disabled;$authorAvatar]
	$description[1;Welcomer have been disabled]
	$color[1;Red]
	$setGuildVar[welcome;false]
	$onlyIf[$getGuildVar[welcome]!=false;Welcomer feature are already disabled!]
	$onlyPerms[manageguild;You need \`\`Manage Guild\`\` permission to use this command!]`
}]