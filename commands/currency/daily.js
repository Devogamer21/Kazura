module.exports ={
	name: "daily",
	code: `
	$title[Daily Reward Claimed]
	$description[You claimed your daily reward
- And received: $get[dmoney]$ And Dailybox!]
	$color[Yellow]
	$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;main];$let[dmoney]];$authorID;main]
	$setGlobalUserVar[daily_box;$sum[$getGlobalUserVar[daily_box;$authorID;main];1];$authorID;main]
	$cooldown[24h;Slow down bud, you can't claim your daily reward again, you still have %time% left.
	]
	$let[dmoney;$random[100;1000]]
	`
}