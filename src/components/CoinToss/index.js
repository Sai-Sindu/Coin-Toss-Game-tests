// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {count: 0, heads: 0, tails: 0}

  onTossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    this.setState({count: tossResult})
    if (tossResult === 0) {
      this.setState(prevState => ({heads: prevState.heads + 1}))
    } else {
      this.setState(prevState => ({tails: prevState.tails + 1}))
    }
  }

  render() {
    const {count, heads, tails} = this.state
    console.log(count)

    return (
      <div className="bg-container">
        <div className="container-card">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img
            src={
              count === 0
                ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
            }
            alt="toss result"
            className="coin-image"
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">{`Total: ${heads + tails}`}</p>
            <p className="result">{`Heads: ${heads}`}</p>
            <p className="result">{`Tails: ${tails}`}</p>
          </div>
        </div>
      </div>
    )
  }
}
export default CoinToss
