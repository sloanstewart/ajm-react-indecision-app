'use strict';

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indescision App'
    ),
    React.createElement(
        'p',
        null,
        'sick app, bro.'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounter();
};
var subtractOne = function subtractOne() {
    count--;
    renderCounter();
};
var reset = function reset() {
    count = 0;
    renderCounter();
};

var appRoot = document.getElementById('app');

var renderCounter = function renderCounter() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: subtractOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'Reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();
