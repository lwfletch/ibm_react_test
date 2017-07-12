import React, { Component } from 'react';
import { Form, ControlLabel, FormControl, FormGroup, Button } from 'react-bootstrap';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Add new person</h3>
            <Form>
              <FormGroup controlId="formInlineFirstName">
                <ControlLabel>First Name</ControlLabel>
                {' '}
                <FormControl type="text"/>
              </FormGroup>
                {' '}
              <FormGroup controlId="formInlineLastName">
                <ControlLabel>Last Name</ControlLabel>
                {' '}
                <FormControl type="text"/>
              </FormGroup>
                {' '}
              <FormGroup controlId="formInlineAddress">
                <ControlLabel>Address</ControlLabel>
                {' '}
                <FormControl type="address"/>
              </FormGroup>
              {' '}
              <FormGroup controlId="formInlineCompany">
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
