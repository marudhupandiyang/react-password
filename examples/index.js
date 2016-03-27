import React from 'react'
import ReactDOM from 'react-dom'
import ReactPassword from '../lib/main'

export class App extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
    this.handleCheckChange = this.handleCheckChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleCheckChange(event) {
    this.setState({checked: !this.state.checked})
  }

  handlePasswordChange(event) {
    console.log(this.refs.password.state.value)
  }

  render() {
    return (
      <div className="form-group col-sm-4">
        <div className="input-group">
          <ReactPassword className="form-control" ref='password' value='password'
                         reveal={ this.state.checked } maxLength='25' onChange={ this.handlePasswordChange } id='secret-password'/>
          <div id="showPassword" className="input-group-addon" onClick={this.handleCheckChange.bind(this)}>
            <i className={this.state.checked ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
          </div>

        </div>
      </div>
    )
  }
}

window.onload = function () {
  ReactDOM.render(
    <App/>,
    document.querySelector('.app')
  )
}
