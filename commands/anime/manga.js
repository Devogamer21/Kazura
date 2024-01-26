module.exports={
	name:"manga",
	code:`$sendMessage[{newEmbed:{title:$mangaInfo[$get[m];title]}
{image:$mangaInfo[$get[m];image]}
{field:Synopsis:$strip[$mangaInfo[$get[m];synopsis]]}
{field:Author:$strip[$mangaInfo[$get[m];author]]}
{field:Background:$strip[$mangaInfo[$get[m];background]]}
{field:Genre:$strip[$mangaInfo[$get[m];genre]]}
{field:Ratings:$strip[$mangaInfo[$get[m];ratings]]}
{field:Popularity:$strip[$mangaInfo[$get[m];popularity]]}
{field:Year:$strip[$mangaInfo[$get[m];year]]}
{field:Volumes:$strip[$mangaInfo[$get[m];volumes]]}
{field:Serializations:$mangaInfo[$get[m];serializations]}}]
$onlyIf[$get[m]!=NFError;Not found]
$let[m;$getID[$message;manga]]`
}