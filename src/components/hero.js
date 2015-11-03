// This component shows a single battler in the arena.

var React = require("react"),
	ptypes = React.PropTypes,
	Link = require("react-router").Link,
	ReactRedux = require("react-redux");

var Hero = React.createClass({
	propTypes: {
		params: ptypes.shape({name:ptypes.string.isRequired}).isRequired, // will be provided by react-router
		heroes: ptypes.object.isRequired // will be provided by react-redux
	},
	render: function(){
		var name = this.props.params.name,
			data = this.props.heroes[name];
		return <div>
			<p><Link to="/">Back to arena</Link></p>
			<p>Here's some info on {this.props.params.name}:</p>
			<p><strong>Quote:</strong> {data.quote} </p>
			<p><strong>Kills:</strong> {data.kills} </p>
		</div>;
	}
});



// connect to Redux store

var mapStateToProps = function(state){
	// This component will have access to `appstate.heroes` through `this.props.heroes`
	return {heroes:state.heroes};
};

module.exports = ReactRedux.connect(mapStateToProps)(Hero);
