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
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <ol>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
            </ol>
        )
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" name="optionInput" placeholder="Add an option"/>
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