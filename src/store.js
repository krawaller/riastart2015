var Redux = require("redux"),
	heroReducer = require("./reducers/heroes"),
	battlefieldReducer = require("./reducers/battlefield"),
	initialState = require("./initialstate");
	/*ReduxRouter = require("redux-router"),
	createHistory = require("history").createHistory,
	routes = require("./routes");*/

var rootReducer = Redux.combineReducers({
	heroes: heroReducer,   // this means heroReducer will operate on appState.heroes
	battlefield: battlefieldReducer // battlefieldReducer will operate on appState.battlefield,
});

module.exports = Redux.createStore( rootReducer, initialState() );