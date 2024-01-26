const { AoiClient, LoadCommands } = require("aoi.js");
const { Panel } = require("@akarui/aoi.panel");
const { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");
const { Snake } = require('discord-gamecord');

 const bot = new AoiClient({
  token: process.env.TOKEN,
  prefix: [".","<@1052069702899347576>","$getGuildVar[prefix;$guildID;main]"],
  intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates", "GuildMembers"],
  events: ["onMessage", "onInteractionCreate", "onJoin","onGuildJoin"],
  database: {
	type: "aoi.db",
	db: require("@akarui/aoi.db"),
	dbType: "KeyValue",
	tables: ["main"],
	securityKey: "a-32-characters-long-string-here",
  }
 });

require('./variables.js')(bot);



 const voice = new AoiVoice(bot, {
  searchOptions: {
	//soundcloudClientId: "Soundcloud ID", // optional
	youtubegl: "US",
  },
  requestOptions: {
	offsetTimeout: 0,
	soundcloudLikeTrackLimit: 200,
  },
 });

// Command Example (ping)
bot.command({
  name: "ping",
  code: `Pong! $pingms`
});



// optional (cacher / filter)
 voice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));
 voice.addPlugin(
  PluginName.Filter,
   new Filter({
	 filterFromStart: false,
  }),
 );

 voice.bindExecutor(bot.functionManager.interpreter); // needed for events

//aoi.jikan setup
const aoijikan = require("aoi.jikan");
aoijikan.setup({
  client: bot, // or bot as per your config
  errorsType: "console", // or "console"
  version: "v1" //the latest and only
});

voice.addEvent(PlayerEvents.QueueEnd);
voice.addEvent(PlayerEvents.TrackStart);
voice.addEvent(PlayerEvents.TrackEnd);
voice.addEvent(PlayerEvents.TrackPause);
voice.bindExecutor(bot.functionManager.interpreter);

const loader = new LoadCommands(bot)
loader.load(bot.cmd, "./commands")
loader.load(voice.cmds, "./voice")

//vixblox setup
const vixblox = require("aoi.vixblox");

vixblox.load({
	bot: bot,
	errortype: "message",
	enableErrors: true,
	version: "v6",
 });

//STATUS
bot.status({
  name: "Playing Visual Studio Code",
  type: "PLAYING",
  status: "dnd",
  time: 12,
});

const panel = new Panel({
   port: 3000,
   client: bot,
 });

 panel.loadAPI({
   auth: "randomstriings", // no spaces, keep it only alphanumeric...
 });

 panel.loadGUI({
   username: process.env.username,
   password: process.env.password,
 });

const { EnkaClient } = require("enka-network-api");
const enka = new EnkaClient();
