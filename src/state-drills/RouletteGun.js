import React from 'react'

class RouletteGun extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            chamber: null,
            spinningTheChamber: false
        }
        this.timeout = null;
    }

    static defaultProps = {
        bulletInChamber: 8
    }

    handleClick = e => {
        this.setState({
            spinningTheChamber: true
        });

        this.timeout = setTimeout( () => {
            let random = Math.ceil(Math.random() * 8);
            this.setState({
                chamber: random,
                spinningTheChamber: false
            })
        }, 2000)
    }

    clearTimer() {
         clearTimeout(this.timeout);
    }

    componentWillUnmount() {
        this.clearTimer();
    }

    render() {
        let output = "";
        if(this.state.spinningTheChamber === true) {
            output = "Spinning the chamber and pulling the trigger";
        }
        else if(this.state.chamber === this.props.bulletInChamber) {
            output = "BANG!!!!"
        }
        else {
            output = "you're safe!!"
        }
        return (
            <div>
                <p>{output}</p>
                <button onClick={this.handleClick}>Pull the trigger!</button>
            </div>
        )
    }
}

export default RouletteGun;