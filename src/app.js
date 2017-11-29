class IndescisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.deleteOptions = this.deleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.addOption = this.addOption.bind(this);
        this.state = {
            options: props.options //["stuff", "thangs", "slide in the dms", "eat ya damb vegatables", "make more dank apps"]
        };
    }

    deleteOptions() {
        this.setState(() => {
            return {
                options: []
            }
        })
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

        this.setState((prevState) => {
            return {
                options: prevState.options.concat( option)
            }
        });
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
                />
                <AddOption 
                    addOption={this.addOption}
                />
            </div>
        );
    }
}

IndescisionApp.defaultProps = {
    options: []
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
                <ol>
                    {
                        props.options.map((option) => <Option key={option} optionText={option} />)
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

        this.setState(() => {
            return {
                error // es6 object shorthand for error: error
            };
        });
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
            <li>{props.optionText}</li>
        );
};

// stateless functional component
// faster, less overhead than class based component

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Dank Lvl: {props.dank}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndescisionApp />, document.getElementById('app'));