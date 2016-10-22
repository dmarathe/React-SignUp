var React = require('react');
var TangoFieldSet = require('./TangoFieldSet.jsx');

var SignUp = React.createClass({
	render: function() {
		return (
				<div>
					<h1 className="mainHeader">Create your Ting account</h1>
					<p className="tagline">Already have an account?
					<button className="signinTrigger">Sign in instead</button>
					</p>
					<TangoFieldSet labelText="User name" classname="password"/>
					<div className="button-wrapper">
					<button type="submit" className="button">Sign up</button>
					</div>
				</div>


			);
	}
}); 
module.exports = SignUp;