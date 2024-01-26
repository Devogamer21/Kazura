module.exports={
	name:"songinfo",
	code:`  $title[$songInfo[title]]
  $description[$songInfo[description]
  $thumbnail[$songInfo[thumbnail]]
  $addField[Duration:;$digitalFormat[$humanizeMs[$songInfo[duration]]]]
  $addField[Added By:;$songInfo[requester]]
  $addButton[1;Link The Song;link;https://www.youtube.com/watch?v=$songInfo[url];false]]
  $color[Random]
  `
}