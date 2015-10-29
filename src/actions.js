var constants = require("./constants");

module.exports = {
	killHero: function(killer,victim){
		return {type:constants.KILL_HERO,killer:killer,victim:victim};
	},
	reset: function(){
		return {type:constants.RESET};
	}
};