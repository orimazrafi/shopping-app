import React, { Component } from 'react';
import ShoppingTable from './shoppingTable';
import store from '../store/index';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';

class ShoppingPage extends Component {
  state = {
    product: {
      name: '',
      price: '',
      quantinty: ''
    },
    show: false
  };
  handleChange = e => {
    const product = { ...this.state.product };
    product[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ product });
  };
  handleSubmit = e => {
    e.preventDefault();
    const product = {
      name: '',
      price: '',
      quantinty: ''
    };
    this.setState({ product, show: false });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div>
        <h2>Shooping.com this is how we shop today.</h2>

        <h5>
          <i className='fa fa-shopping-cart mr-4' />
          you'r shooping cart
        </h5>

        <Button variant='primary' onClick={this.handleShow}>
          Add Product
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <form onSubmit={this.handleSubmit}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='form-group'>
                <label>
                  Name:
                  <input
                    type='text'
                    value={this.state.product.name}
                    onChange={this.handleChange}
                    name='name'
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Price:
                  <input
                    type='number'
                    value={this.state.product.price}
                    onChange={this.handleChange}
                    name='price'
                  />
                </label>
              </div>
              <div className='form-group'>
                <label>
                  Quantinty:
                  <input
                    type='number'
                    value={this.state.product.quantinty}
                    onChange={this.handleChange}
                    name='quantinty'
                  />
                </label>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={this.handleClose}>
                Close
              </Button>
              <button
                className='btn btn-sm btn-primary'
                onClick={() => this.props.handleAdd(this.state.product)}
              >
                Save Changes
              </button>
            </Modal.Footer>
          </form>
        </Modal>

        <ShoppingTable store={store} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.items
  };
}

function dispatchStateToProps(dispatch) {
  return {
    handleAdd: product => {
      const action = { type: 'ADD', product };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(ShoppingPage);
