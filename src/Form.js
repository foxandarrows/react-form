import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueFirstName: '',
      valueLastName: '',
      valueEmail: '',
      valueSelect : ''

    };

    this.handleFirstName = this.handleFirstName.bind(this);
    this.handleLastName = this.handleLastName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFirstName(event) {
    this.setState({valueFirstName: event.target.value});
  }

  handleLastName(event) {
    this.setState({valueLastName: event.target.value});
  }

  handleEmail(event) {
    this.setState({valueEmail: event.target.value});
  }

  handleSelect(event) {
    this.setState({valueSelect: event.target.value});
  }

  handleSubmit(event) {
    alert('Your form has been submitted !');
    event.preventDefault();
  }

  render() {
    return (
      <div className="row">
        <form className="col s12 z-depth-4" onSubmit={this.handleSubmit}>
        <h2 className="form-title center-align">Open your free account</h2>
        <br/>

          <div className="row">
            <div className="input-field col s6">
              <label id="firstName" className="inputForm" htmlFor="firstName">
                  First Name
              </label>
              <input type="text" id="firstName" value={this.state.value} onChange={this.handleFirstName} />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6">
              <label id="lastName" className="inputForm" htmlFor="lastName">
                Last Name
              </label>
              <input type="text" id="lastName" value={this.state.value} onChange={this.handleLastName} />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6"> 
              <label id="email" className="inputForm" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" value={this.state.value} onChange={this.handleEmail} />
            </div>
          </div>

          <div className="row">
            <div className="input-field col s6"> 
              <select value={this.state.value} onChange={this.handleSelect}>
                  <option value="belgium">Belgium</option>
                  <option value="spain">Spain</option>
                  <option value="columbia">Columbia</option>
                  <option value="england">England</option>
              </select>
              <label id="country" className="inputForm">Country</label>
            </div>
          </div>

          <div className="row" id="fillForm">
            <input type="checkbox" id="checkin"/>
            <label htmlFor="checkin" className="inputForm">I certify my data are valid</label>
          </div>

          <div className="row">
            <div className="input-field col s7"></div>
            <div id="button-register" className="input-field inputForm col s5"> 
              <button type="submit" class="btn waves-effect waves-light" name="action" value="REGISTER">
                REGISTER
              </button>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

export default Form;

