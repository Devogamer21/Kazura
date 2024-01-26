module.exports = [{
  name: "play",
  aliases: ["p"],
  $if: "old",
  code: `
$if[$queueLength>0]
$title[Added to Queue]
$description[$message added to queue]
$color[#ff0000]
$endif
$playTrack[$message;youtube]
$if[$hasplayer==false]
$joinVC[$voiceID;yes;no;yes;default;no]
$endif
$onlyIf[$voiceID[$authorID]!=;{newEmbed:{description:You need to be in a voice channel}{color:#ff0000}}]
$onlyIf[$message!=;{newEmbed:{description:You need to write a song name}{color:#ff0000}}]`
}]