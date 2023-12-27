import { Component } from "react";
import { Header } from "./Header.styled";
import toast from "react-hot-toast";
import { BiSearchAlt2 } from "react-icons/bi";


export class Searchbar extends Component {
    state ={
        search: '',
    };

    onSubmitForm = e => {
      e.preventDefault();
      if (!this.state.search){
        return toast.error('Enter text');
      }
      this.props.handleSubmit(this.state.search);
      this.resetForm();
    }

    onChangeInput = e =>{
      const {name, value} = e.currentTarget; 
      this.setState({[name]: value})
    };

    resetForm = () => {
      this.setState({ search: '' });
     }
 

    render() {
return (
    <Header>
  <form 
  onSubmit={this.onSubmitForm}>
    <button type="submit">
    <BiSearchAlt2 size = "20 "/>
    </button>

    <input
      value={this.state.search}
      onChange={this.onChangeInput()}
      name="search"
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

