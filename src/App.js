import React, { Component } from 'react';
import axios from 'axios';
import { Form, ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props) {
   super(props);
   this.state = { first_name: '', last_name: '', address: '', company: '', data: [] };
   this.loadFromServer = this.loadFromServer.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  loadFromServer() {
   axios.get(this.props.url)
   .then(res => {
   this.setState({ data: res.data });
   })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('SUBMITTED')
    let first_name = this.state.first_name.trim();
    let last_name = this.state.last_name.trim();
    let address = this.state.address.trim();
    let company = this.state.company.trim();
    if (!last_name || !first_name || !address || !company) {
      return;
    }
    this.props.onSubmit({ first_name: first_name, last_name: last_name, address:address, company:company });
    this.setState({ first_name: '', last_name: '', address: '', company: '' });
    console.log('End of Form Submitted function')
  }

  componentDidMount() {
   this.loadFromServer();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Add new person</h3>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup controlId="first_name">
                <ControlLabel>First Name</ControlLabel>
                {' '}
                <FormControl type="text"/>
              </FormGroup>
                {' '}
              <FormGroup controlId="last_name">
                <ControlLabel>Last Name</ControlLabel>
                {' '}
                <FormControl type="text"/>
              </FormGroup>
                {' '}
              <FormGroup controlId="address">
                <ControlLabel>Address</ControlLabel>
                {' '}
                <FormControl type="address"/>
              </FormGroup>
              {' '}
              <FormGroup controlId="company">
                <ControlLabel>Company</ControlLabel>
                {' '}
                <FormControl type="text"/>
              </FormGroup>
              {' '}
              <Button bsStyle="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
          <div className="col-md-6">
            <div className="row">
              <h3>Results</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
