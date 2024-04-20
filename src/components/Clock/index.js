import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state={date:new Date()}

  componentDidMount() {
    this.timerId = setInterval(this.sec, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  sec = () => {
    this.setState({date: new Date()})
  }
  render() {
    const {date} = this.state
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
