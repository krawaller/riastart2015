// This component shows a single battler in the arena.

var React = require("react"),
	_ = require("lodash"),
	Link = require("react-router").Link;

var Battler = React.createClass({
	render: function(){
		var p = this.props,
			name = p.name,
			link = <Link to={"/hero/"+name}>{name}</Link>,
			doing = p.doing,
			killable = _.reduce(doing,function(list,status,opp){
				return status !== "dead" && opp!==name ? list.concat(opp) : list;
			},[]),
			buttons = killable.map(function(opp){
				return <button key={opp} onClick={p.kill.bind(this,opp)}>{"Kill "+opp}</button>;
			},this).concat(<button key="duck" onClick={p.duck}>duck</button>);
		var info = {
			waiting: buttons.length > 1 ? buttons : "Winner!!",
			ducking: "ducking",
			dead: "...dead...",
			aiming: "aiming!"
		}[p.doing[name]];
		return <div className="battler">
			<Link to={"/hero/"+name}>{name}</Link>
			<div>{info}</div>
		</div>;
	}
});

module.exports = Battler;