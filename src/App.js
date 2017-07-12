import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div [style.margin-top.px]="10" className="row">
          <div className="col-md-6">
            <h3>Add new person</h3>
            <form className="form-inline">
              <div className="form-group">
                <label for="first_name">First Name</label>
                <input type="text" className="form-control" id="first_name" #first_name>
              </div>
              <div className="form-group">
                <label for="last_name">Last Name</label>
                <input type="text" className="form-control" id="last_name" #last_name>
              </div>
              <div className="form-group">
                <label for="address">Address</label>
                <input type="address" className="form-control" id="address" #address>
              </div>
              <div className="form-group">
                <label for="company">Company</label>
                <input type="text" className="form-control" id="company" #company>
              </div>
              <br>
              <button type="button" (click)="addNew(first_name.value, last_name.value, address.value, company.value)" class="btn btn-primary">Submit</button>
            </form>
          </div>
          <div className="col-md-6">
            <div [style.margin-top.px]="10" className="row">
              <h3>Results</h3>
              <!-- Bootstrap Card -->
              <div [style.margin-right.px]="10" className="row card card-block">
                <p>First Name: </p>
                <p>Last Name: </p> 
                <p>Address: </p> 
                <p>Company: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
