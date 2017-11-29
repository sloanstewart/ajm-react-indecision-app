class Visibility extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            title: "Wow, that's some app!",
            visibility: false
        }
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggle}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                    <div>
                    <p>Details here, myguy.</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// const app = {
//     title: 'Visibility Toggle: Official App',
//     subtitle: 'Wow, that\'s some app!',
//     options: []
// };

// let visibility = false;

// const toggleVis = () => {
//     visibility = !visibility;

//     renderApp();
// };

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>{app.title}</h1>
//             <button onClick={toggleVis}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//             {visibility && (
//                 <div>
//                 <p>Details here, myguy.</p>
//                 </div>
//             )}
//         </div>
//     );

//     ReactDOM.render(template, document.getElementById('app'));
// };

// renderApp();