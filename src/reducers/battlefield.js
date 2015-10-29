var constants = require("../constants"),
	initialState = require("../initialstate");

/*
A reducer is a function that takes the current state and an action, and then returns a
new state.
*/
module.exports = function(state,action){
	var newstate = Object.assign({},state);
	switch(action.type){
		case constants.KILL_HERO:
			newstate.alive[action.victim] = 0;
			newstate.standing = newstate.standing - 1;
			newstate.log.push(action.killer+" killed "+action.victim+"!");
			if (newstate.standing === 1){
				newstate.log.push(action.killer+" WINS!!");
			}
			return newstate;
		case constants.RESET:
			return initialState().battlefield;
		default: return state || initialState().battlefield;
	}
};