import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    deleteOptions = () => {
        this.setState(() => ({ options: [] }));
    };
    deleteOneOption = (optionToRemove) => {
       this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
       }));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    };
    addOption = (option) => {
        if (!option) {
            return 'Enter valid value please.';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists.';
        }

        this.setState((prevState) => ({
                options: prevState.options.concat( option)
            }));
    };
    clearOption = (selectedOption) => {
        this.setState(() =>({
            selectedOption: undefined
        }));
    };
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
    render() {
        return (
            <div>
                <Header />
                <div className="container">
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
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    clearOption={this.clearOption}
                />
            </div>
        );
    }
}

export default IndecisionApp;