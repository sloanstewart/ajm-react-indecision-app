class IndescisionApp extends React.Component {
    render() {
        const title = "Dank Decision App";
        const subtitle = "ayy lmao";
        const options = ["stuff", "thangs", "lunch"];
        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        this.props;
        return (
            <div>
            <h1>{this.props.title}</h1>
            <h2>{this.props.subtitle}</h2>
            </div>
        );
    } 
}

class Action extends React.Component {
    handlePick() {
        console.log('handlePick');
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
        this.removeAll = this.removeAll.bind(this);
    }
    removeAll() {
        console.log(this.props.options);
    }
    render() {
        return (
            <div>
                <ol>
                    {
                        this.props.options.map((option) => <Option key={option} optionText={option} />)
                    }
                </ol>
                <button onClick={this.removeAll}>Remove All</button>
            </div>
        )
    }
}

class AddOption extends React.Component {
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            console.log({option});
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" placeholder="Add an option"/>
                    <button>Add it!</button>
                </form>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <li>{this.props.optionText}</li>
        );
    }
}

ReactDOM.render(<IndescisionApp />, document.getElementById('app'));