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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="option" placeholder="Add an option" />
                    <button className="button">Add it!</button>
                </form>
            </div>
        );
    }
}