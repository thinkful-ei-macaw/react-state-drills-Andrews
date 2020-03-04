import React from 'react';

export default class Bomb  extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount() {
    console.log('Count has begun!');
    this.interval = setInterval(() => {
      console.log('setInterval');
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  

  componentWillUnmount() {
      clearInterval(this.interval)
  }

  render() {

    if(this.state.count >= 8) {clearInterval(this.interval)}

    return (
      <div>
        {this.state.count % 2 === 0 && <p>tick</p>}
        {this.state.count % 2 !== 0 && <p>tock</p>}
        {this.state.count >= 8 && <p>BOOM!!!!</p>}
      </div>
    )
  }
}