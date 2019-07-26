import React from "react";
import "../App.css";

class UseReactOnlyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      age: "",
      password: "",
      isInAgreement: false,
      nationality: "Kenya",
      gender: ""
    };
  }

  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    alert("This is the data" + this.state.firstName);
    console.log(">>>", this.state);
    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">A basic form in react</header>
        <form className="Form" onSubmit={this.handleSubmit}>
          <div className="input">
            <label>
              Full Name:
              <input
                type="text"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="input">
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="input">
            <label>
              Age:
              <input
                type="number"
                name="age"
                value={this.state.age}
                onChange={this.handleChange}
                required
                min={0}
                max={110}
              />
            </label>
          </div>
          <div className="input">
            <label>
              Nationality:
              <select
                name="nationality"
                value={this.state.nationality}
                onChange={this.handleChange}
              >
                <option value="Kenya">Kenya</option>
                <option value="Burundi">Burundi</option>
                <option value="Uganda">Uganda</option>
                <option value="Rwanda">Rwanda</option>
              </select>
            </label>
          </div>
          <div className="input">
            <label htmlFor="gender">gender: </label>
            <div>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={this.handleChange}
              />
              <label>Female</label>
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={this.handleChange}
              />
              <label>Male</label>
            </div>
          </div>
          <div className="input">
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
              />
            </label>
          </div>
          <div className="input">
            <input
              name="isInAgreement"
              type="checkbox"
              checked={this.state.isInAgreement}
              onChange={this.handleChange}
            />
            <label>I have agreed to the terms and conditions</label>
          </div>
          <input type="submit" className="myButton" />
        </form>
      </div>
    );
  }
}

export default UseReactOnlyForm;
