

const template = (
    <div>
        <h1>Indescision App</h1>
        <p>sick app, bro.</p>
        <ol>
            <li>item one</li>
            <li>item two</li>
        </ol>
    </div>
);

let count = 0;
const addOne = () => {
    count++;
    renderCounter();
};
const subtractOne = () => {
    count --;
    renderCounter();
};
const reset = () => {
    count = 0;
    renderCounter();
};

const appRoot = document.getElementById('app');

const renderCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={subtractOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
};

renderCounter();