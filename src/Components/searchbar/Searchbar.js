import axios from "axios";
import React, { Component } from "react";
import { SearchbarStyled } from "./SearchbarStyled";
import { SearchFormStyled } from "./SearchFormStyled";

class Searchbar extends Component {
  state = {
    name: "",
  };

  handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    this.props.onSubmit(this.state.name.trim());
    if (!this.state.name) {
      alert("Поле не может быть пустым!");
      return;
    }
    this.reset();
  };

  reset = () => {
    this.setState({ name: "" });
  };

  render() {
    return (
      <SearchbarStyled>
        <SearchFormStyled className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchFormStyled>
      </SearchbarStyled>
    );
  }
}

export default Searchbar;
