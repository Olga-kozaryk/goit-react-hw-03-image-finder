import { Component } from "react";
import { Container } from "./App.styled";
import { Searchbar } from "components/Searchbar/Searchbar";
import { Toaster } from "react-hot-toast";
import { getSearch } from "Services/Services";
import { ImageGallery } from "components/ImageGallery/ImageGallery";

export class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    total: 1,
    error: null,
    empty: false,
    loading: false,
    showModal: false,
  }

  componentDidUpdate(_, prevState) { 
    if (prevState.search !== this.state.search ||
      prevState.page !== this.state.page) {
        this.getFunc(this.state.search, this.state.page);
    }
  } 

  getFunc = (text, page) => {
    this.setState({ loading: true }); 
    getSearch(text, page)
    .then(resp => resp.json())
    .then(data => {

      if (data.hits.length === 0) {
        this.setState({ empty: true }); // вмикаємо флаг, який показує, чи є результати пошуку порожніми
      }
      this.setState(prevSt => ({
        page: prevSt.page,
        images: [...prevSt.images, ...data.hits], // додаємо нові картинки до масиву
        total: data.total,
      }));
    })
    .catch(error => {
      this.setState({ error: error.message }); // записуємо помилку в стейт
    })
    .finally(() => {
      this.setState({ loading: false }); // вимикаємо індикатор завантаження
    });
  }

  handleSubmit = search => {
    this.setState ({
      search,
      images: [],
      page: 1,
      total: 1,
      error: null,
    })
  }

  render() {
   const {images} = this.state;
    return (
      <Container>
        <Toaster toastOptions={{duration: 1500}} />
        <Searchbar handleSubmit = {this.handleSubmit} />
        <ImageGallery images={images} />

      </Container>
    )
  }
}
