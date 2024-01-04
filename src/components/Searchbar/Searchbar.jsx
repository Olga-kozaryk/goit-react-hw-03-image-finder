import { Component } from "react";
import { Header } from "./Header.styled";
import toast from "react-hot-toast";
import { BiSearchAlt2 } from "react-icons/bi";
import { FormStyled } from "./FormSearchbar.styled";


export class Searchbar extends Component {
  state = {
    search: '',
  };

    onChangeInput = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
  }

    resetForm = () => {
     this.setState({ search: '' });
    }

  render() {
    return (
      <Header>
        <FormStyled
          onSubmit={e => {
                    e.preventDefault();

                    if (!this.state.search) {
                      return toast.error('Error:Enter text');
                    }

            this.props.handleSubmit(this.state.search);
            this.resetForm();
          }}
        >

          <button type="submit">
            <BiSearchAlt2 size="20" />
          </button>

          <input
            value={this.state.search}
            onChange={this.onChangeInput}
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </FormStyled>
      </Header>
    );
  }}

