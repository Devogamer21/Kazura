module.exports =[{
	name: "deposit",
	code: `
	$description[How much do you want to deposit, $username?]
	$color[Yellow]
	$addButton[1;Input;secondary;input;false]`
},
{
	name: "input",
	type: 'interaction',
	prototype: 'button',
	code: `
	$interactionModal[Deposit Money;depositid;
	{actionRow:
		{textInput: How much you want to deposit?:1:depositid1:false::1:10}}]`
},
{
	name: "depositid",
	type: 'interaction',
	prototype: 'modal',
	code: `
	$interactionReply[;{newEmbed:
	{description: $textInputValue[depositid1] has been deposited into your bank.}
	{color: Yellow}}]
	$setGlobalUserVar[bank;$sum[$getGlobalUserVar[bank;$authorID;main];$textInputValue[depositid1]];$authorID;main]
	$setGlobalUserVar[money;$sub[$getGlobalUserVar[money;$authorID;main];$textInputValue[depositid1]];$authorID;main]
	$onlyIf[$textInputValue[depositid1]<=$getGlobalUserVar[money;$authorID;main];You don't have enough money to deposit that much.]`
}]