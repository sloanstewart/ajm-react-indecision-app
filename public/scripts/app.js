'use strict';

var app = {
    title: 'Visibility Toggle: Official App',
    subtitle: 'Wow, that\'s some app!',
    options: []
};

var visibility = false;

var toggleVis = function toggleVis() {
    visibility = !visibility;

    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVis },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                'Details here, myguy.'
            )
        )
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
