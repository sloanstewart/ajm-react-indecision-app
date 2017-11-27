
const app = {
    title: 'Visibility Toggle: Official App',
    subtitle: 'Wow, that\'s some app!',
    options: []
};

let visibility = false;

const toggleVis = () => {
    visibility = !visibility;

    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVis}>{visibility ? 'Hide Details' : 'Show Details'}</button>
            {visibility && (
                <div>
                <p>Details here, myguy.</p>
                </div>
            )}
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};

renderApp();