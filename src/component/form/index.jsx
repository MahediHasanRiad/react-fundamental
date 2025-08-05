import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    country: "",
    bio: "",
    birthday: ''
  };

  inputValue = (event) => {
    this.setState({[event.target.name]: event.target.value})
  };

  render() {
    return (
      <div className="container">
        <form action="">
          <input
            className="form-control my-2"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.inputValue}
            placeholder="Inter your name..."
          />
          <select
            className="form-control my-2"
            name="country"
            value={this.state.country}
            onChange={this.inputValue}
          >
            <option>Select a Country</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="India">India</option>
            <option value="China">China</option>
          </select>
          <textarea
            className="form-control my-2"
            type="text-area"
            name="bio"
            value={this.state.bio}
            onChange={this.inputValue}
            placeholder="about your self...."
          />
          <input
            className="form-control my-2"
            type="date"
            name="birthday"
            value={this.state.birthday}
            onChange={this.inputValue}
          />
          {/* <button>Show me</button> */}
          <h1
            type="button"
            className="btn btn-light"
            onClick={() => console.log(this.state)}
          >
            submit
          </h1>
        </form>
      </div>
    );
  }
}

export default Form;
