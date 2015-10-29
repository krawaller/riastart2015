// This component shows a single battler in the arena.

var React = require("react"),
	_ = require("lodash"),
	Link = require("react-router").Link;

var Battler = React.createClass({
	render: function(){
		var p = this.props,
			name = p.name,
			link = <Link to={"/hero/"+name}>{name}</Link>,
			alive = p.alive,
			killable = _.reduce(alive,function(list,standing,opp){
				return standing && opp!==name ? list.concat(opp) : list;
			},[]),
			buttons = killable.map(function(opp){
				return <button key={opp} onClick={p.kill.bind(this,opp)}>{"Kill "+opp}</button>;
			},this);
		if (p.alive[name]){
			return <div className="battler">
				<p>{link}</p>
				{buttons.length ? buttons : <p>Winner!!</p>}
			</div>;
		} else {
			return <div className="battler dead"><p>{link}</p><p>...dead...</p></div>;
		}
	}
});

module.exports = Battler;