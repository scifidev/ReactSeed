import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: 'World'
        };

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange (e) {
        this.setState({
            username: e.target.value
        });
    }
    render() {
        var style = {
            padding: '5px'
        }; // In-line CSS

        return (
            <section style={style}>
                <h1>Hello {this.state.username}!</h1><br />
                Change name:
                <input
                    text="text"
                    value={this.state.username}
                    onChange={this.handleChange}
                    style={style} />
            </section>
            
        );
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));