import React from 'react';
import './TodoStyle.css';
import shortid from 'shortid';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export default class TodoForm extends React.Component {
  state = {
    text: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({
      text: '',
    });
  };

  render() {
    return (
      <>
        <div className="form-body dsp-flex">
          <form onSubmit={this.handleSubmit}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Todo's username"
                aria-label="Todo's username"
                aria-describedby="basic-addon2"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <InputGroup.Append>
                <Button variant="outline-secondary" onClick={this.handleSubmit}>
                  Add
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </form>
        </div>
      </>
    );
  }
}
