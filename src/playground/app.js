class IndescisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.deleteOneOption = this.deleteOneOption.bind(this);

        this.state = {
            options: []
        };
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({options}));
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {
        console.log('unmounted!');
    }

    deleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    deleteOneOption(optionToRemove) {
       this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
       }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        console.log(option);
    }

    addOption(option) {
        if (!option) {
            return 'Enter valid value please.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }

        this.setState((prevState) => ({
                options: prevState.options.concat( option)
            }));
    }

    render() {
        const title = "Dank Decision App";
        const subtitle = "ayy lmao";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                    />
                <Options 
                    options={this.state.options}
                    deleteOptions={this.deleteOptions}
                    deleteOneOption={this.deleteOneOption}
                />
                <AddOption 
                    addOption={this.addOption}
                />
            </div>
        );
    }
}

const Header = (props) => {
        return (
            <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        );
};

Header.defaultProps = {
    title: "Definitely An Extremely Dank App"
};

const Action = (props) => {
        return (
            <div>
                <button
                    onClick={props.handlePick}
                    disabled={!props.hasOptions}
                >
                What should I do?
                </button>
            </div>
        );
};

const Options = (props) => {
        return (
            <div>
                {props.options.length === 0 && <p>No options found. Add an option to get started.</p>}
                <ol>
                    {
                        props.options.map((option) => (
                            <Option 
                                key={option}
                                optionText={option}
                                deleteOneOption={props.deleteOneOption}
                            />
                        ))
                    }
                </ol>
                <button onClick={props.deleteOptions}>Remove All</button>
            </div>
        );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => ({
                error // es6 object shorthand for error: error
        }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" placeholder="Add an option" />
                    <button>Add it!</button>
                </form>
            </div>
        );
    }
}

const Option = (props) => {
        return (
            <li>
            {props.optionText}
            <button 
                onClick={(e) => {
                    props.deleteOneOption(props.optionText)
                }}
            >
                X
            </button>
            </li>
        );
};

// stateless functional component
// faster, less overhead than class based component - no state or lifecycle

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Dank Lvl: {props.dank}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndescisionApp />, document.getElementById('app'));