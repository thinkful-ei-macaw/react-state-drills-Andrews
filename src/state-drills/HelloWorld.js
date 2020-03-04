import React from 'react';

class HelloWorld extends React.Component{
    constructor(props) {
        super(props)
        this.state = { who: "Buddy" }
    }

    handleClick = respond => {
        console.log("Hello ", respond)
        this.setState({
            who: respond
        })
    }

    render() {
        return (
            <div>
                <p>Hello, {this.state.who}</p>
                <button onClick={() => this.handleClick("World")}>World</button>
                <button onClick={() => this.handleClick("Friend")}>Friend</button>
                <button onClick={() => this.handleClick("React")}>React</button>
            </div>
        )
    }
}

export default HelloWorld