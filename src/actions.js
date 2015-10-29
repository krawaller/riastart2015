/*
This module contains action creators. They are functions which will return an object describing the actions.
*/

var constants = require("./constants");

module.exports = {
	reset: function(){
		return {type:constants.RESET};
	},
	duckDown: function(who){
		return function(dispatch,getState){
			dispatch({type:constants.DUCK_DOWN,coward:who});
			setTimeout(function(){
				dispatch({type:constants.STAND_UP,coward:who});
			},2000);
		}
	},
	aimAt: function(killer,victim){
		// here we take advantage of Redux-thunk; instead of returning an object describing an action,
		// we return a function that should be called with dispatch and getState. This function will
		// then return the action! This allows us to make asynchronous actions or have other random
		// stuff in the action data (such as using new Date which we do here)
		return function(dispatch,getState){
			dispatch({type:constants.AIM_AT,killer:killer,victim:victim});
			setTimeout(function(){
				dispatch({type:constants.KILL_HERO,killer:killer,victim:victim});
			},2000);
		};
	}
};