import './index.css'

import {Component} from 'react'

class FruitsCounter extends Component {
  state = {key1: 0, key2: 0}

  onIncrementMangoes = () =>
    this.setState(prevState => ({key1: prevState.key1 + 1}))

  onIncrementBananas = () =>
    this.setState(prevState => ({key2: prevState.key2 + 1}))

  render() {
    const {key1, key2} = this.state
    return (
      <div className="container">
        <div className="inner-container">
          <h1 className="heading">
            Bob eat <span className="span">{key1}</span> mangoes{' '}
            <span className="span">{key2}</span> bananas
          </h1>
          <div className="inner2">
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mangoes"
                className="image"
              />
              <button
                type="button"
                className="button1"
                onClick={this.onIncrementMangoes}
              >
                Eat Mango
              </button>
            </div>
            <div className="cont">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="mangoes"
                className="image"
              />
              <button
                type="button"
                className="button1"
                onClick={this.onIncrementBananas}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
