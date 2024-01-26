module.exports = {
	name: "genshinchar",
	aliases: ["genshincharacter"],
	code: `
	$title[Genshin Character - $message]
	$description[
	**Name** : $getObjectProperty[data;name]
	**Rarity** : $getObjectProperty[data;rarity]
	**Vision** : $getObjectProperty[data;vision]
	**Weapon Type** : $getObjectProperty[data;weapon]
	**Gender** : $getObjectProperty[data;gender]
	
	**Nation** : $getObjectProperty[data;nation]]
	$addField[**Constellation**;$getObjectProperty[data;constellation]]
	$addField[**Birthday**;$getObjectProperty[data;birthday]]
	$addField[**Description**;$getObjectProperty[data;description]]
	$addField[**Affiliation**;$getObjectProperty[data;affiliation]]
	$addButton[1;Link The Character;link;https://genshin-impact.fandom.com/wiki/$replaceText[$getObjectProperty[data;name]; ;_];false]
	
	$onlyIf[$getObjectProperty[data;name]!=undefined;{newEmbed:
	{title:ERROR!}
	{field:put this of on the char:albedo,alhaitham,aloy,amber,arataki-itto,ayaka,ayato,baizhu,barbara,beidou,bennett,candace,charlotte,chongyun,collei,cyno,dehya,diluc,diona,dori,eula,faruzan,fischl,freminet,furina,ganyu,gorou,hu-tao,jean,kaeya,kaveh,kazuha,keqing,kirara,klee,kokomi,kuki-shinobu,layla,lisa,lynette,lyney,mika,mona,nahida,navia,neuvillette,nilou,ningguang,noelle,qiqi,raiden,razor,rosaria,sara,sayu,shenhe,shikanoin-heizou,sucrose",tartaglia,thoma,tighnari,traveler-anemo,traveler-dendro,traveler-electro,traveler-geo,traveler-hydro,venti,wanderer,wriothesley,xiangling,xiao,xingqiu,xinyan,yae-miko,yanfei,yaoyao,yelan,yoimiya,yun-jin,zhongli:false}{footer:there no picture im very sorry 😖}}]
	$createObject[data;$jsonRequest[https://genshin.jmp.blue/characters/$message]]
	`
}