import React, { Component } from 'react';
import { Col, Row, Grid } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.css';
import classnames from 'classnames';
import logo from '../../images/ancur-logo.png';
import './style.css';
import Stamp from '../stamp/stamp.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.stampingDocument = this.stampingDocument.bind(this);
    this.enterId = this.enterId.bind(this);
  }

  handleChange(event) {
    this.setState({ input: event.target.value });
  }

  stampingDocument(event) {
    // sending event.target.files[0] to dbTest to be stamped
    console.log('event.target.files', event.target.files);
    this.props.actions.stampDoc(event.target.files[0]);
  }

  enterId() {
    let id = this.state.input;
    this.props.actions.proveReceipt(id);
  }

  render() {
    const { className, ...props } = this.props;
    return (
      <Grid className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <Row className="App-features">
          <Col md={6} className="upload">
            <Stamp />
          </Col>
          <Col md={6} className="inputField">
            <input type="text" onChange={ this.handleChange } />
            <input type="button"
              onClick={ this.enterId } value="Enter"/>

          </Col>
        </Row>

        <div >
          { this.props.results }
        </div>
      </Grid>
    );
  }
}

export default App;
