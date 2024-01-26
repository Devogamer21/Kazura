module.exports={
	name:"anime",
	code:`$sendMessage[{newEmbed:{title:$animeInfo[$get[a];title]}
{image:$animeInfo[$get[a];image]}
{description:$animeInfo[$get[a];synopsis]}
{field:Genre:$animeInfo[$get[a];genre]}
{field:Ratings:$animeInfo[$get[a];ratings]}
{field:Episodes:$animeInfo[$get[a];episodes]}
{field:Year:$animeInfo[$get[a];year]}
{field:Studio:$animeInfo[$get[a];studio]}
{field:Trailer:$animeInfo[$get[a];trailer]}
{field:Recommendations:$animeInfo[$get[a]; Recommendations]}
{field:URL:$animeInfo[$get[a];url]}}]
$let[a;$getID[$get[anime]]]
$onlyIf[$getID[$get[anime]]!=NFError;error]
$let[anime;$message]`
}