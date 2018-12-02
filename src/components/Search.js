import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/fetchDataActions";
import DisplayWeather from "./DisplayWeather";

class Search extends Component {
  state = {
    cityValue: "",
    countryValue: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.fetchData(this.state.cityValue, this.state.countryValue);
  };

  render() {
    const { cityValue, countryValue } = this.state;
    const { isLoaded } = this.props;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={cityValue}
            name="cityValue"
            id="city"
            placeholder="Ex: Paris"
          />
          <input
            onChange={this.handleChange}
            value={countryValue}
            name="countryValue"
            id="country"
            placeholder="Ex: Fr"
          />
          <button>Search</button>
        </form>
        {isLoaded && <DisplayWeather />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoaded: state.weather.isLoaded
});

export default connect(
  mapStateToProps,
  { fetchData }
)(Search);
