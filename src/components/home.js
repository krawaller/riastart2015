var React = require("react"),
	ptypes = React.PropTypes,
	ReactRedux = require("react-redux"),
	Log = require("./log"),
	Battlers = require("./battlers"),
	actions = require("../actions");

var Home = React.createClass({
	propTypes: {
		// redux store state, imported below
		battle: ptypes.shape({ 
			doing: ptypes.object.isRequired,
			log: ptypes.arrayOf(ptypes.string)
		}).isRequired,
		// redux action hookups, set up below
		kill: ptypes.func.isRequired,
		duck: ptypes.func.isRequired,
		reset: ptypes.func.isRequired
	},
	render: function(){
		var battleprops = this.props.battle;
		return (
			<div>
				<Battlers doing={battleprops.doing} kill={this.props.kill} duck={this.props.duck} />
				<Log log={battleprops.log}/>
				{ battleprops.standing === 1 && <button onClick={this.props.reset}>Reset</button> }
			</div>
		);
	}
});

// now we connect the component to the Redux store:

var mapStateToProps = function(state){
	// This component will have access to `state.battlefield` through `this.props.battle`
	return {battle:state.battlefield};
};

var mapDispatchToProps = function(dispatch){
	return {
		kill: function(killer,victim){ dispatch(actions.aimAt(killer,victim)); },
		duck: function(coward){ dispatch(actions.duckDown(coward)); },
		reset: function(){ dispatch(actions.reset()); }
	}
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(Home);
