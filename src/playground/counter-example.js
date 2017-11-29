class Counter extends React.Component {
    counstructor(props){
        super(props);
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reset = this.reset.bind(this);
    }
    addOne() {
        count ++;
    }

    minusOne() {
        count --;
    }

    reset() {
        count = 0;
    }

    render() {
        return (
            <div>
                <h1>Count: </h1>
                <button onClick={this.addOne}>+1</button>
                <button onClick={this.minusOne}>-1</button>
                <button onClick={this.reset}>reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounter();
// };
// const subtractOne = () => {
//     count --;
//     renderCounter();
// };
// const reset = () => {
//     count = 0;
//     renderCounter();
// };


// const renderCounter = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={subtractOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounter();