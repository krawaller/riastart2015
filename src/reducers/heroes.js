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
			newstate[action.killer].kills += 1;
			return newstate;
		default: return state || initialState().heroes;
	}
};