// This component shows a single battler in the arena. It is used by the Battlers component


var React = require("react"),
	ptypes = React.PropTypes,
	_ = require("lodash"),
	Link = require("react-router").Link,
	C = require("../constants");

var Battler = React.createClass({
	propTypes: {
		name: ptypes.string.isRequired,
		kill: ptypes.func.isRequired,
		duck: ptypes.func.isRequired
	},
	render: function(){
		var p = this.props,
			name = p.name,
			doing = p.doing,
			// list all enemies that aren't dead yet
			killable = _.reduce(doing,function(list,status,opp){
				return status !== C.DEAD && opp!==name ? list.concat(opp) : list;
			},[]),
			// make buttons for all killable enemies
			buttons = killable.map(function(opp){
				return <button key={opp} onClick={p.kill.bind(this,opp)}>{"Kill "+opp}</button>;
			},this).concat(<button key="duck" onClick={p.duck}>duck</button>);
		//controls depend on what we're doing
		var controls = { // using ES6 syntax for dynamic object properties
			[C.WAITING]: buttons.length > 1 ? buttons : "Winner!!",
			[C.DUCKING]: "ducking",
			[C.DEAD]: "...dead...",
			[C.AIMING]: "aiming!"
		}[p.doing[name]];
		return <div className="battler">
			<Link to={"/hero/"+name}>{name}</Link>
			<div>{controls}</div>
		</div>;
	}
});

module.exports = Battler;