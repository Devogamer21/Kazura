module.exports=[{
	name:'sell',
	$if:'old',
	code:`
	$if[$message==fish]
	$title[Selling Fish]
	$description[How many fish do you want to sell?]
	$addField[Fishes;$getGlobalUserVar[fish;$authorID;main]]
	$addButton[1;Input;secondary;sellfish;false]
	$endif
	$if[$message==burger]
	$title[Selling Burgers]
	$description[How many burgers do you want to sell?]
	$addField[1;Burgers;You have $getGlobalUserVar[burger] burgers.]
	$addButton[1;Input;secondary;sellburger;false]
	$endif
	`
},{
name:"sellfish",
type:"interaction",
prototype:"button",
code:`
$interactionModal[fishsell;fishsell;{actionRow:
{textInput:How Many fish ?:1:sfishid:false:Pls how many:1:200}}]`
},{
	name:"fishsell",
	type:"interaction",
	prototype:"modal",
	code:`	 
			$interactionReply[Thanks for submitting this form!;;;;everyone;true]
			$title[selling]
			$description[You selling laptop]
			$addField[Receipt;+$$math[$textInputValue[sfishid]*15] x $textInputValue[sfishid]]
			$addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
			$setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish;$authorID;main];$textInputValue[sfishid]];$authorID;main]
			$setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[sfishid]*15]];$authorID;main]
			$onlyIf[$getGlobalUserVar[fish;$authorID;main]>=$textInputValue[sfishid];You don't have enough fish]
			$deleteCommand`
	},{
			   name:"sellburger",
			   type:"interaction",
			   prototype:"button",
			   code:`
			   $interactionModal[Selling Burger;burgersell;{actionRow:
			   {textInput:How Many fish ?:1:sfishid:false:Pls how many:1:200}}]`
			   },{
			name:"fishsell",
			type:"interaction",
			prototype:"modal",
			code:`

			$interactionReply[Thanks for submitting this form!;;;;everyone;true]
			
						   $title[selling]
						   $description[You selling laptop]
						   $addField[Receipt;+$$math[$textInputValue[sfishid]*15] x $textInputValue[sfishid]]
						   $addField[Balance;$$getGlobalUserVar[money;$authorID;main]]
						   $setGlobalUserVar[fish;$sub[$getGlobalUserVar[fish;$authorID;main];$textInputValue[sfishid]];$authorID;main]
						   $setGlobalUserVar[money;$sum[$getGlobalUserVar[money;$authorID;main];$math[$textInputValue[sfishid]*15]];$authorID;main]
						   $onlyIf[$getGlobalUserVar[fish;$authorID;main]>=$textInputValue[sfishid];You don't have enough fish]
						   $deleteCommand`
				   },]
