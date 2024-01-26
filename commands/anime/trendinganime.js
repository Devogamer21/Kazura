module.exports = [{
	name:"trendinganime",
	code:`
	$title[Choose your anime web you to see the most trending in their website]	
	$addButton[1;AniList;primary;anilist;false;❤]
	$addButton[1;MY Anime List;primary;mal;false;💙]
	`
},{
	name:"anilist",
	type:"interaction",
	prototype:"button",
	code:`
	$title[Trending Anime on AniList]
	$description[**$trendinganime[anilist]**]
	$deleteCommands`
},{
	name:"mal",
	type:"interaction",
	prototype:"button",
	code:`
	$title[Trending Anime on MyAnimeList]
	$description[**$trendingAnime[anilist]**]
	$deleteCommands`
}
	]