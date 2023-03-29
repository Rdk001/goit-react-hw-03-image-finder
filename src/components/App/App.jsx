import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { AppContainer } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    request: '',
  };

  handlerSearchbarSubmit = request => {
    this.setState({ request });
  };

  render() {
    return (
      <AppContainer>
        <Searchbar onSubmit={this.handlerSearchbarSubmit} />
        <ImageGallery request={this.state.request} />
        <ToastContainer autoClose={3000} styled />
      </AppContainer>
    );
  }
}
