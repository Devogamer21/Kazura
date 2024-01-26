module.exports = [{
		name: "inventory",
		aliases: ["inv"],
		code: `
		$title[1;Inventory]
		$description[1;
		 **🍕Pizza:** $getGlobalUserVar[pizza;$mentioned[1;true];main]
		 **🍔Burger:** $getGlobalUserVar[burger;$mentioned[1;true];main]
		 **🎣Fishing Rod:** $getGlobalUserVar[fishing_rod;$mentioned[1];main]
		 **<:rifle:1197403807076843590>Rifle:** $getGlobalUserVar[rifle;$authorID;main]
		 **<:laptop:1197363100324737094>laptop:** $getGlobalUserVar[laptop;$mentioned[1];main]
		]
		$thumbnail[1;$userAvatar[$mentioned[1;true]]]
		$color[1;Random]
		$footer[1;If you don't have items, time GET SOME WORK]
		$addField[Fishes;
	 **🐟Fish** $getGlobalUserVar[pizza;$mentioned[1;true]]
	 **🐠Good Fish:** $getGlobalUserVar[burger;$mentioned[1;true]]
	 **🐡Super Fish:** $getGlobalUserVar[fishing_rod;$mentioned[1;true]]
	 **Stick:** $getGlobalUserVar[stick;$mentioned[1];main]]
		`
},]