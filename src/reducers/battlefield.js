var constants = require("../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state.

Note: the hero states (in `doing`) should really be made into constants too...
*/
module.exports = function(state,action){
	var newstate = Object.assign({},state);
	switch(action.type){
		case constants.DUCK_DOWN:
			newstate.doing[action.coward] = "ducking";
			newstate.log.push(action.coward+" ducks down like a coward.");
			return newstate;
		case constants.STAND_UP:
			newstate.doing[action.coward] = "waiting";
			newstate.log.push(action.coward+" stands back up.");
			return newstate;
		case constants.AIM_AT:
			newstate.doing[action.killer] = "aiming";
			newstate.log.push(action.killer+" takes aim at "+action.victim+"!");
			return newstate;
		case constants.KILL_HERO:
			// the shooter has died before he got the shot off
			if (state.doing[action.killer] === "dead"){
				newstate.log.push("The trigger finger twitches on "+action.killer+"'s corpse");
			} else {
				newstate.doing[action.killer] = "waiting";
				// the target is ducking
				if (state.doing[action.victim] === "ducking") {
					newstate.log.push(action.victim+" dodges a blast from "+action.killer+"!");
				// the target has already been killed
				} else if (state.doing[action.victim] === "dead") {
					newstate.log.push(action.killer+" blasts "+action.victim+"'s corpse.");
				// we kill the target!
				} else {
					newstate.doing[action.victim] = "dead";
					newstate.standing = newstate.standing - 1;
					newstate.log.push(action.killer+" killed "+action.victim+"!");
					if (newstate.standing === 1){
						newstate.log.push(action.killer+" WINS!!");
					}
				}
			}
			return newstate;
		case constants.RESET:
			return initialState().battlefield;
		default: return state || initialState().battlefield;
	}
};