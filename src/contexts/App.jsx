import React, { Component, createContext } from 'react';

const { Provider, Consumer } = createContext();

class AppProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      modalTitle: null,
      modalImg: null,
      modalBody: null,
    };

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  showModal(title, body, img) {
    this.setState({
      modalTitle: title,
      modalBody: body,
      modalImg: img,
      showModal: true,
    });
  }

  closeModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Provider
        value={{
				  ...this.state,
				  displayModal: this.showModal,
				  closeModal: this.closeModal,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

const AppConsumer = Consumer;

export { AppProvider, AppConsumer };
