/*
This is the initial state of the Redux Store. I store it in a separate file because I also use
it in the reducers when we do the Reset action.

It returns a function instead of an object to make sure no one can change the initial state.
*/

module.exports = function(){
	return {
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
			}
		},
		battlefield: {
			alive: {batman:1,superman:1,spiderman:1},
			standing: 3,
			log: ["Ready.... fight!"]
		}
	};
};