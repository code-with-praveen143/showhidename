// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstname: false, lastname: false}

  isFirstname = () => {
    this.setState(prevState => ({firstname: !prevState.firstname}))
  }

  isLastname = () => {
    this.setState(prevState => ({lastname: !prevState.lastname}))
  }

  render() {
    const {firstname, lastname} = this.state
    return (
      <div className="bg-container">
        <h1 className="title">Show/Hide</h1>
        <div className="button-container">
          <div>
            <button type="button" className="button" onClick={this.isFirstname}>
              Show/Hide Firstname
            </button>
            {firstname ? <p className="name">Joe</p> : null}
          </div>
          <div>
            <button type="button" className="button" onClick={this.isLastname}>
              Show/Hide Lastname
            </button>
            {lastname ? <p className="name">Jonas</p> : null}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
