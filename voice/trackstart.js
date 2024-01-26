module.exports = [{
  type: "trackStart",
  channel: "$channelID",
  code: `$title[Now Playing]
  $color[Green]

  $thumbnail[$songInfo[thumbnail]]
  $description[
[$songInfo[title]]($songInfo[artistURL])]
$addField[Duration:;$songInfo[duration]]
$addField[Added By:;$songInfo[requester]]
$addTimestamp


`
}]