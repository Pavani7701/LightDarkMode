// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {
    isDarkModde: true,
  }

  clickButton = () => {
    this.setState(prevState => ({isDarkModde: !prevState.isDarkModde}))
  }

  render() {
    const {isDarkModde} = this.state
    const modeofbackground = isDarkModde ? 'dark-mode' : 'light-mode'
    const buttonText = isDarkModde ? 'Light Mode' : 'Dark Mode'

    return (
      <div className="bg-container">
        <div className={`container ${modeofbackground}`}>
          <h1 className="heading">Click to Change Mode</h1>
          <button type="button" className="button" onClick={this.clickButton}>
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
