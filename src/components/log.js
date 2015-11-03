// A simple component to list the event log on the main battle page. No callbacks.
// Used by Home.

var React = require("react"),
	ptypes = React.PropTypes;

var Log = React.createClass({
	propTypes: {
		log: ptypes.arrayOf(ptypes.string).isRequired
	},
	render: function(){
		var list = this.props.log.map(function(txt,n){
			return <li key={n}>{txt}</li>;
		});
		return <ul>{list}</ul>;
	}
});

module.exports = Log;