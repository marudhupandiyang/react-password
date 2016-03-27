var React = require('react')

export default class ReactPassword extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      value: this.props.value || ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({value: event.target.value})
    this.props.onChange(event)
  }

  render() {

    return (
      <input type={ this.props.reveal ? 'text' : 'password' } value={ this.state.value }
             onChange={ this.handleChange } className={this.props.className || 'react-password' } />
    )
  }
}

// ReactPassword.propTypes = {
//   onChange: React.PropTypes.func,
//   reveal: React.PropTypes.bool
// }