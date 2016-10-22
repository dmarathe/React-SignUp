var React = require('react');
var ReactDOM = require('react-dom');
var SignUp = require('./signUp.jsx');


var App = React.createClass({

    render: function () {
        return (
            <div>
                <SignUp/>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('container')
);