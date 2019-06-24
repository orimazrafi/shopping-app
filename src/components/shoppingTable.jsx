import React from 'react';
import { connect } from 'react-redux';
const ShoppingTable = props => {
  return (
    <table className='table'>
      <thead className='thead-dark'>
        <tr>
          <th scope='col'>Product Name</th>
          <th scope='col'>Price</th>
          <th scope='col'>Quantinty</th>
          <th scope='col'>Total</th>
          <th scope='col'>There are {props.items.length} items.</th>
        </tr>
      </thead>
      <tbody>
        {props.items.map((item, index) => (
          <tr key={index}>
            <th>{item.name}</th>
            <td>{item.price}</td>
            <td>{item.quantinty}</td>
            <td>{item.price * item.quantinty}</td>
            <td>
              <button
                className='btn btn-sm btn-secondary mr-4'
                onClick={() => props.onEdit(item, index)}
              >
                Update
              </button>
              <button
                className='btn btn-sm btn-danger ml-4'
                onClick={() => props.handleDelete(item)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
function mapStateToProps(state) {
  console.log('mapStateToProps');
  return { items: state.items };
}
function dispatchStateToProps(dispatch) {
  return {
    handleDelete: item => {
      const action = { type: 'DELETE', item };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(ShoppingTable);
