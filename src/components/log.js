var React = require("react");

var Log = React.createClass({
	render: function(){
		return <ul>{this.props.log.map(function(txt,n){
			return <li key={n}>{txt}</li>;
		})}</ul>;
	}
});

module.exports = Log;