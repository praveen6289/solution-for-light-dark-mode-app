// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isModeSelected: true}

  onClickMode = () => {
    this.setState(prevState => ({isModeSelected: !prevState.isModeSelected}))
  }

  render() {
    const {isModeSelected} = this.state
    const buttonText = isModeSelected ? 'Light Mode' : 'Dark Mode'
    const modeClassName = isModeSelected ? 'dark-mode' : 'light-mode'
    return (
      <div className="bg-container">
        <div className={`content-container ${modeClassName}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button
              className="mode-button"
              type="button"
              onClick={this.onClickMode}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
