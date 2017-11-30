import React from 'react';

export default class AddOption extends React.Component {
        state = {
            error: undefined
        };
    addOption = (e) =>  {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.addOption(option);

        this.setState(() => ({
                error // es6 object shorthand for error: error
        }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" name="option" autocomplete="off" placeholder="Add an option" />
                    <button>Add it!</button>
                </form>
            </div>
        );
    }
}