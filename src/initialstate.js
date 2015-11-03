/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.

It returns a function instead of an object to make sure no one can change the initial state.
*/

var C = require("./constants");

module.exports = function(){
	return {
		// "persistent" data on heroes
		heroes: {
			batman: {
				quote: "I'm batman.",
				kills: 0
			},
			superman: {
				quote: "I can fly!",
				kills: 0
			},
			spiderman: {
				quote: "Why don't you love me, Lois?",
				kills: 0
			},
			"he-man": {
				quote: "By the power of Grayskull!",
				kills: 0
			}
		},
		// data on the current battle
		battlefield: {
			doing: {batman:C.WAITING,superman:C.WAITING,spiderman:C.WAITING,"he-man":C.WAITING},
			standing: 4,
			log: ["Ready.... fight!"]
		}
	};
};