import { Component } from "react";
import { Header } from "./Header.styled";


export class Searchbar extends Component {
    state ={
        search: '',
    };

    render() {
return (
    <Header>
  <form className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
    </button>

    <input
      className="input"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</Header>
)
    }
}

