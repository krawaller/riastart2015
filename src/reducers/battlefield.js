var C = require("../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state. This reducer is responsible for appState.battlefield data.
See `initialstate.js` for a clear view of what it looks like!
*/
module.exports = function(state,action){
	var newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
	switch(action.type){
		case C.RESET:
			return initialState().battlefield;
		case C.DUCK_DOWN:
			newstate.doing[action.coward] = C.DUCKING;
			newstate.log.push(action.coward+" ducks down like a coward.");
			return newstate;
		case C.STAND_UP:
			newstate.doing[action.coward] = C.WAITING;
			newstate.log.push(action.coward+" stands back up.");
			return newstate;
		case C.AIM_AT:
			newstate.doing[action.killer] = C.AIMING;
			newstate.log.push(action.killer+" takes aim at "+action.victim+"!");
			return newstate;
		case C.KILL_HERO:
			// the shooter has died before he got the shot off
			if (state.doing[action.killer] === C.DEAD){
				newstate.log.push("The trigger finger twitches on "+action.killer+"'s corpse");
			} else {
				newstate.doing[action.killer] = C.WAITING; // whatever happens we should no longer be aiming
				// the target is ducking
				if (state.doing[action.victim] === C.DUCKING) {
					newstate.log.push(action.victim+" dodges a blast from "+action.killer+"!");
				// the target has already been killed
				} else if (state.doing[action.victim] === C.DEAD) {
					newstate.log.push(action.killer+" blasts "+action.victim+"'s corpse.");
				// we kill the target!
				} else {
					if (state.doing[action.victim]===C.AIMING){
						newstate.log.push(action.killer+" killed "+action.victim+" before he got his shot off!");
					} else {
						newstate.log.push(action.killer+" killed "+action.victim+"!");
					}
					newstate.doing[action.victim] = C.DEAD;
					newstate.standing = newstate.standing - 1;
					if (newstate.standing === 1){
						newstate.log.push(action.killer+" WINS!!");
					}
				}
			}
			return newstate;
		default: return state || initialState().battlefield;
	}
};