var React = require('react');

var FormFieldSet = React.createClass({
	render:function(){
		var classname = this.props.classname,
			label = this.props.labelText;

		return (
				<div className="fieldgroup">
					<label for="first_name">Test</label>
					<input type="text" name="first_name" value=""/>
				</div>	
			);
	}
});
module.exports = FormFieldSet;