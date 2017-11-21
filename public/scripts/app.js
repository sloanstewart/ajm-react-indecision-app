'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'React App'
    ),
    React.createElement(
        'p',
        null,
        'Some great text here.'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
