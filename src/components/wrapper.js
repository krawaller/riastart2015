/*
This is our top-level component. Sub-components matching specific routes will be
contained in `this.props.children` and rendered out.
*/

var React = require('react');

var Wrapper = React.createClass({
    render: function() {
        return (
            <div className="wrapper">
                <h1>Demo app</h1>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Wrapper;