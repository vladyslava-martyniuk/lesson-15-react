import React, { Component } from "react";
import styled from "styled-components";
const SearchBar = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #7600f4ff;;
  border: 1px solid #fedd05ff ;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 20px;

  input {
    flex: 1;
    padding: 8px;
    border: none;
    outline: none;
  }

  button {
    padding: 8px 16px;
    border: none;
    background-color: #7600f4ff;
    color: #fedd05ff;
    cursor: pointer;
  }
`;
export default class GiftsSearch extends Component {
  state = {
    query: "",
  };

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: "" });
  };

  render() {
    return (
      <SearchBar onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Search GIFs"
          value={this.state.query}
          onChange={this.handleChange}
        />
        <button type="submit">Search</button>
      </SearchBar>
    );
  }
}
