var React = require("react"),
	Battler = require("./battler"),
	_ = require("lodash");

var Battlers = React.createClass({
	render: function(){
		var p = this.props, boxes = _.map(p.alive,function(alive,name){
			var kill = p.kill.bind(this,name); // prefill the kill method so that killer is always `name`
			return <Battler key={name} name={name} alive={p.alive} kill={kill} />;
		},this);
		return <div className="battlers">{boxes}</div>;
	}
});

module.exports = Battlers;